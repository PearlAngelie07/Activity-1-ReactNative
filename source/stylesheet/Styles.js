import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
        },
        main: {
          backgroundColor: '#24469C',
          alignItems: 'left',
          justifyContent: 'center',
          height: 250,
          width: 355,
          borderTopRightRadius: 40,
          borderBottomRightRadius: 40,
          marginBottom:'40px',
          marginTop:'40px'
        },
        Anya: {
          marginLeft: '20px',
          width: 100,
          height: 100,
          borderRadius: 100 / 2,
        },
        profile: {
          color: '#fff',
      fontSize: '30px',
      marginLeft: '20px' 
    },
    course:{
      color: '#fff',
      marginLeft: '20px',
    },
    mysub:{
      marginRight:'250px',
      fontSize: '20px',
    },
    Subjects: {
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      width: 350,
      backgroundColor: '#DCDCDC',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      marginBottom:'8px',
      marginTop:'8px',
    },
  
    sub:{
      fontSize: '20px', 
      padding:5,
      fontWeight:'bold',
      marginLeft:'15px'
    },
    Description:{
      marginLeft:'30px'
    },
    units:{
      marginLeft:'30px'
    },
    clickhere:{
      marginTop:'15px',
      marginLeft:'180px',
      fontSize: '16px',
      marginBottom:'40px',
      color:'#24469C'
    }, 
  });