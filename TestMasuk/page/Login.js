//import liraries
import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, Alert} from 'react-native';
import {Button, Gap, Input, Link} from '../src/component';

// create a component
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    console.log('ini nilai email :' + email);
  }, [email]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{'Masuk dan mulai Test CRUD'}</Text>
      <Gap height={40} />
      <Text style={{color:'red'}}>{email.includes("@") || email.length == 0? "":"Harus mengandung @"}</Text>
      <Input label="Email Addres" onChangeText={(val) => setEmail(val)} />
      <Gap height={24} />
      <Text style={{color:'red'}}>{pass.length > 7? "":"Harus minimal 8 karakter"}</Text>
      <Input
        label="Password"
        onChangeText={(val) => setPass(val)}
        isSecure={true}
      />
      <Link label="Forgot My Password" fontSize={12} />
      <Gap height={24} />
      {email.includes('@') && pass.length >= 8 ? (
        <Button
          text="Login"
          type="secondary"
          action={() =>
            email === 'admin@admin.com' && pass === 'admin1234'
              ? navigation.replace('NewPageStuff')
              : alert('Username atau Password anda salah, cek di ReadMe.txt')
          }
        />
      ) : (
        <Button text="Login" />
      )}

      <Gap height={30} />
      <Link
        label="Create new Account"
        fontSize={16}
        align={'center'}
        action={() => navigation.navigate('Register')}
      />
      <Gap height={80} />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 40,
  },
  text: {
    color: '#000000',
    fontSize: 18,
    marginTop: 40,
    fontFamily: 'Nunito-SemiBold',
    maxWidth: 160,
  },
});

//make this component available to the app
export default Login;
