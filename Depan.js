import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

import firebase from './Firebase';

export class Depan extends Component {
  state = {
    rencana: '',
    listRencanaAktivitas: [],
  };

  tambahRencana = () => {
    if (this.state.rencana === '') {
      alert('Silahkan Masukan Rencana');
      return false;
    }
    // membuat table pada firebase
    firebase
      .database()
      .ref('/listRencanaAktivitas')
      .push({
        aktivitas: this.state.rencana,
        sudah: false,
      })
      .then(() => {
        alert('berhasil create aktivitas');
        let rencana = firebase.database().ref('/listRencanaAktivitas');
        rencana.once('value').then(snapshot => {
          this.setState({
            listRencanaAktivitas: snapshot.val(),
          });
        });
        this.setState({
          rencana: '',
        });
      })
      .catch(() => {
        alert('Gagal');
      });
  };
  render() {
    return (
      <View style={styles.viewWrapper}>
        <View style={styles.viewAktifitas}></View>
        <View style={styles.tombol}>
          <TextInput
            style={styles.textInput}
            placeholder="Masukan rencana aktivitas"
            onChangeText={text => this.setState({rencana: text})}
            value={this.state.rencana}
          />
          <Button title="Tambah Rencana" onPress={this.tambahRencana} />
        </View>
        <View style={styles.tombolDelete}></View>
      </View>
    );
  }
}

export default Depan;

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  viewAktifitas: {
    flex: 4,
    borderWidth: 1,
  },
  tombol: {
    flex: 2,
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  tombolDelete: {
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#afafaf',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    fontSize: 20,
  },
});
