import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './source/stylesheet/Styles';
import { Image } from 'react-native';

const Pic =()=>{
  return(
    <View>
      <Image source ={{uri: 'https://dthezntil550i.cloudfront.net/1o/latest/1o2205031237575030023813341/1280_960/5b6e67d5-99ff-4d0b-b7a9-9c7cae291f55.png'}}style ={styles.Anya} />
    </View>
  )
};

const Profile=()=>{
  const fname='Pearl Angelie'
  const lname='Lansang'
  return(
    <View>
    <Text style ={styles.profile}>{fname} {lname}</Text>
    </View>
  )
};

const Course = props =>{
  return(
    <View>
      <Text style ={styles.course}>{props.infoTech}</Text>
    </View>
  )
};

const Subject = props => {
  return(
    <View>
      <Text style={styles.sub} >{props.subcode}</Text>
    </View>
  )
};

const SubjectDesc = props => {
  return(
    <View>
      <Text style={styles.Description}>{props.Description}</Text>
    </View>
  )
};
const Units = props => {
  return(
    <View>
      <Text style={styles.units}>Units: {props.units}</Text>
    </View>
  )
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Pic/>
       <Profile/> 
       <Course infoTech = "BS INFORMATION TECHNOLOGY 3B"/>
        </View>
        <Text style={styles.mysub}>My Subjects</Text>

        <View style={styles.Subjects}>
        <Subject  subcode= 'ELEC 2'/>
          <View>
            <SubjectDesc Description= 'Web Development/Web Enterprise'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.Subjects}>
        <Subject  subcode= 'ELEC 3'/>
          <View>
            <SubjectDesc Description= 'Mobile Application'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.Subjects}>
        <Subject  subcode= 'IT 311'/>
          <View>
            <SubjectDesc Description= 'Software Engineering'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.Subjects}>
        <Subject  subcode= 'IT 312'/>
          <View>
            <SubjectDesc Description= 'Web Development/Web Enterprise'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.Subjects}>
        <Subject  subcode= 'IT 313'/>
          <View>
            <SubjectDesc Description= 'Quantitative Methods'/>
            <Units units='3'/>
          </View> 
      </View>
      <Text style={styles.clickhere}>Click here to see more</Text> 
      <StatusBar style="auto" />
    </View>
  );
}

