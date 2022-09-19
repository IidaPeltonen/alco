import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  Button,
  TextInput,
  Switch,
  SafeAreaView,
  Alert,
  ScrollView
} from 'react-native'
import { lightTheme, darkTheme } from './Styles'
import { useState } from 'react'
import RadioForm from 'react-native-simple-radio-button'
import NumericInput from 'react-native-numeric-input'

export default function App () {
  const [isDark, setLight] = useState(false)
  const theme = isDark ? darkTheme : lightTheme
  const toggle = () => setLight(prev => !prev)

  const genders = [
    { label: 'Male', bottles: 'male' },
    { label: 'Female', bottles: 'female' }
  ]

  const [result, setResult] = useState(0)
  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState(genders[0].bottles)
  const [bottles, setbottles] = useState(0)
  const [hours, sethours] = useState(0)
  const [ok, setOK] = useState(false)

  const showAlert = () => {
    Alert.alert('Notice!', 'Please fill in your weight!', [
      {
        Text: 'OK',
        onPress: () => setOK(true)
      },
      {
        Text: 'Cancel',
        onPress: () => setOK(false)
      }
    ])
  }

  function calculate () {
    //alert, jos painoa ei ole syötetty
    if (weight === 0) {
      {
        showAlert()
      }
    } else {
      let litres = bottles * 0.33
      let grams = litres * 8 * 4.5
      let burning = weight / 10
      let gramsLeft = grams - burning * hours
      const res =
        gender === 'male'
          ? gramsLeft / (weight * 0.7)
          : gramsLeft / (weight * 0.6)
      // jos lukema on alle 0
      if (res < 0) {
        setResult(0)
      }
      // muuten
      else {
        setResult(res.toFixed(2))
      }
    }
  }

  return (
    <ScrollView>
      <SafeAreaView style={theme.main}>
        {/* slider teemanvaihdolle */}
        <View style={theme.field}>
          <Text style={theme.switch}>Theme </Text>
          <Switch
            trackColor={{ true: 'red', false: 'pink' }}
            thumbColor={isDark ? '#D2DAFF' : '#AAC4FF'}
            onValueChange={toggle}
            value={isDark}
          ></Switch>
        </View>
        <View style={theme.container}>
          {/* iso otsikko */}
          <Text style={theme.TextOtsikkoIso}>ALCOMETER</Text>
          {/* väliotsikko */}
          <Text style={theme.TextOtsikko}>Weight</Text>
          {/* painonsyöttökenttä, numeerinen, ei desimaaleja */}
          <TextInput
            style={theme.TextInput}
            keyboardType='number-pad'
            onChangeText={Text => setWeight(Text)}
          />
        </View>

        <View style={theme.container}>
          {/* väliotsikko */}
          <Text style={theme.TextOtsikko}>Bottles</Text>
          {/* numeroInputit pulloille ja tunneille */}
          <NumericInput
            onChange={v => setbottles(v)}
            bottles={bottles}
            minValue={0}
            totalWidth={100}
            rounded
            TextColor={'balck'}
            containerStyle={{ backgroundColor: 'white' }}
          />
          {/* väliotsikko */}
          <Text style={theme.TextOtsikko}>Hours</Text>
          {/* numeroInputit pulloille ja tunneille */}
          <NumericInput
            onChange={v => sethours(v)}
            hours={hours}
            minValue={0}
            totalWidth={100}
            rounded
            TextColor={'balck'}
            containerStyle={{ backgroundColor: 'white' }}
          />
        </View>

        <View style={theme.container}>
          {/* väliotsikko */}
          <Text style={theme.TextOtsikko}>Gender</Text>
          {/* radiot sukupuolen valintaan */}
          <RadioForm
            style={theme.radio}
            labelStyle={{ color: 'purple' }}
            buttonSize={10}
            radio_props={genders}
            initial={0}
            onPress={bottles => {
              setbottles(bottles)
            }}
          />
        </View>

        <View style={theme.container}>
          <Button
            style={theme.button}
            onPress={calculate}
            title='Count!'
          ></Button>
        </View>
        <View style={theme.result}>
          {/* tuloslaatikko */}
          <Text style={{color: result > 4 ? "brightred" : (result > 1.5 && result < 3.9) ? "yellow" : "lightgreen"}}>{result}</Text>
          </View>
        <StatusBar style='auto' backgroundColor='red' />
      </SafeAreaView>

    </ScrollView>
  )
}
