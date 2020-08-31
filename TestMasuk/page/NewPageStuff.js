import React from 'react';
import AssetImage from '../src/image/images';
import {AsyncStorage} from 'react-native';
import {SearchBar, Icon} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';

const searchIcon = () => <AssetImage name="ic-loupe-image" />;
const closeIcon = () => <AssetImage name="ic-close" />;

class NewPageStuff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDum: [],
      tempDataDum: [],
      keyText: '',
      indexSelcted: -1,
      isVisiblel: false,
      id: '',
      name: '',
      qty: 0,
      exp_date: 0, //date
      harga: 0,
      shortDepend: [
        {label: 'No Container', value: 1},
        {label: 'name', value: 2},
        {label: 'Size', value: 3},
        {label: 'exp_date', value: 4},
        {label: 'Tire', value: 5},
      ],
      sortStuff: 0,
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    const myData = [
      {
        id: '1',
        name: 'Wet',
        exp_date: '2020-20-20',
        qty: '2',
        harga: 2,
      },
      {
        id: '2',
        name: 'Dry',
        exp_date: '2020-20-20',
        qty: '2',
        harga: 2,
      },
      {
        id: '3',
        name: 'Dry',
        exp_date: '2020-20-20',
        qty: '2',
        harga: 2,
      },
      {
        id: '4',
        name: 'Dry',
        exp_date: '2020-20-20',
        qty: '2',
        harga: 2,
      },
      {
        id: '5',
        name: 'Dry',
        exp_date: '2020-20-20',
        qty: '2',
        harga: 2,
      },
      {
        id: '1234098',
        name: 'Dry',
        exp_date: '2020-20-20',
        qty: '2',
        harga: 2,
      },
      {
        id: '12340980',
        name: 'Dry',
        exp_date: '2020-20-20',
        qty: '2',
        harga: 2,
      },
    ];
    this.setState({
      dataDum: myData,
      tempDataDum: myData,
    });
  }

  updateSearch(keyText) {
    let tempData = this.state.tempDataDum.filter((value, index) => {
      return Object.keys(value).some((key) =>
        value[key].toString().toLowerCase().includes(keyText.toLowerCase()),
      );
    });
    this.setState({keyText: keyText, dataDum: tempData});
  }

  addValue() {
    let tempData = [
      {
        id: this.state.id,
        qty: this.state.qty,
        exp_date: this.state.exp_date,
        name: this.state.name,
        harga: this.state.harga,
      },
      ...this.state.dataDum,
    ];

    this.setState({dataDum: tempData, tempDataDum: tempData});
  }

  updateValue() {
    let tempdata = [...this.state.dataDum];
    tempdata[this.state.indexSelcted] = {
      id: this.state.id,
      qty: this.state.qty,
      exp_date: this.state.exp_date,
      name: this.state.name,
      harga: this.state.harga,
    };
    this.setState({dataDum: tempdata, tempDataDum: tempdata});
  }

  deleteValue() {
    let tempdata = this.state.dataDum.filter(
      (item, index) => index !== this.state.indexSelcted,
    );
    this.setState({dataDum: tempdata, indexSelcted: -1, tempDataDum: tempdata});
  }

  deleteAlert = () =>
    Alert.alert(
      'Alert',
      'Apakah anda yakin ingin menghapus data ini ?',
      [
        {
          text: 'Batal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.deleteValue()},
      ],
      {cancelable: true},
    );

  sortDataDum(index) {
    let tempData = [...this.state.dataDum];
    switch (index) {
      case 0:
        tempData.sort(this.compareContainer);
        break;
      case 1:
        tempData.sort(this.comparename);
        break;
      case 2:
        tempData.sort(this.compareSize);
        break;
      case 3:
        tempData.sort(this.compareexp_date);
        break;
      case 4:
        tempData.sort(this.compareharga);
        break;
    }

    this.setState({dataDum: tempData});
  }

  compareContainer(a, b) {
    const tempA = a.id.toLowerCase();
    const tempB = b.id.toLowerCase();

    let comparison = 0;
    if (tempA > tempB) {
      comparison = 1;
    } else if (tempA < tempB) {
      comparison = -1;
    }
    return comparison;
  }

  comparename(a, b) {
    const tempA = a.name.toLowerCase();
    const tempB = b.name.toLowerCase();

    let comparison = 0;
    if (tempA > tempB) {
      comparison = 1;
    } else if (tempA < tempB) {
      comparison = -1;
    }
    return comparison;
  }

  compareSize(a, b) {
    const tempA = a.size;
    const tempB = b.size;

    let comparison = 0;
    if (tempA > tempB) {
      comparison = 1;
    } else if (tempA < tempB) {
      comparison = -1;
    }
    return comparison;
  }

  compareexp_date(a, b) {
    const tempA = a.exp_date;
    const tempB = b.exp_date;

    let comparison = 0;
    if (tempA > tempB) {
      comparison = 1;
    } else if (tempA < tempB) {
      comparison = -1;
    }
    return comparison;
  }

  compareharga(a, b) {
    const tempA = a.harga;
    const tempB = b.harga;

    let comparison = 0;
    if (tempA > tempB) {
      comparison = 1;
    } else if (tempA < tempB) {
      comparison = -1;
    }
    return comparison;
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={{flex: 0.2}}>
          <SearchBar
            placeholder="Cari disini"
            onChangeText={this.updateSearch}
            value={this.state.keyText}
            lightTheme={true}
            round={true}
            containerStyle={styles.toolBar}
            inputContainerStyle={styles.searchInput}
            searchIcon={searchIcon}
            clearIcon={closeIcon}
          />
          <DropDownPicker
            placeholder="Pilih Sort"
            items={this.state.shortDepend}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item, index) => this.sortDataDum(index)}
          />
        </View>

        <FlatList
          style={{marginTop: 100, flex: 1}}
          data={this.state.dataDum}
          extraData={this.state.indexSelcted}
          ItemSeparatorComponent={() => (
            <View style={{borderColor: '#000', borderWidth: 2}}></View>
          )}
          ListEmptyComponent={() => (
            <Text style={{flex: 1, textAlign: 'center'}}>Data Kosong</Text>
          )}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  indexSelcted: index,
                  id: item.id,
                  exp_date: item.exp_date,
                  name: item.name,
                  harga: item.harga,
                  qty: item.qty,
                })
              }
              style={
                index == this.state.indexSelcted
                  ? styles.itemSelected
                  : styles.item
              }>
              <Text style={styles.text}>{`ID : ${item.id}`}</Text>
              <Text style={styles.text}>{`name : ${item.name}`}</Text>
              <Text style={styles.text}>{`qty: ${item.qty}`}</Text>
              <Text
                style={styles.text}>{`Expired Date : ${item.exp_date}`}</Text>
              <Text style={styles.text}>{`harga: ${item.harga}`}</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.bottomTab}>
          <TouchableOpacity
            disabled={this.state.indexSelcted == -1}
            style={styles.tabItem}
            onPress={() => this.deleteAlert()}>
            {this.state.indexSelcted != -1 ? (
              <AssetImage name="ic-delete" />
            ) : (
              <View></View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.indexSelcted == -1}
            style={styles.tabItem}
            onPress={() => this.setState({isVisiblel: true})}>
            {this.state.indexSelcted != -1 ? (
              <AssetImage name="ic-edit" />
            ) : (
              <View></View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => this.setState({indexSelcted: -1, isVisiblel: true})}>
            <AssetImage name="ic-add" />
          </TouchableOpacity>
        </View>

        <FormModal
          isVisiblel={this.state.isVisiblel}
          self={this}
          closeModal={() =>
            this.setState({isVisiblel: false, indexSelcted: -1})
          }
          actionAddUpdate={() => {
            this.state.indexSelcted == -1
              ? this.addValue()
              : this.updateValue();
            this.setState({
              indexSelcted: -1,
              isVisiblel: false,
              id: '',
              exp_date: 0,
              qty: 0,
              name: '',
              harga: 0,
            });
          }}
        />
      </>
    );
  }
}

const FormModal = ({self, isVisiblel, closeModal, actionAddUpdate}) => {
  return (
    <Modal
      visible={isVisiblel}
      transparent={true}
      animated
      animationType="fade">
      <ScrollView style={styles.modalContainer}>
        <Text>
          {self.state.indexSelcted == -1 ? 'Tambah Data' : 'Update Data'}
        </Text>
        <View style={styles.wrapperContainer}>
          <Text>ID</Text>
          <TextInput
            style={styles.inputText}
            editable={self.state.indexSelcted === -1}
            value={self.state.id}
            placeholder={'No Container'}
            onChangeText={(val) => self.setState({id: val})}
          />
        </View>
        <View style={styles.wrapperContainer}>
          <Text>Nama</Text>
          <TextInput
            style={styles.inputText}
            value={self.state.name}
            placeholder={'Nama'}
            onChangeText={(val) => self.setState({name: val})}
          />
        </View>
        <View style={styles.wrapperContainer}>
          <Text>Epired Date</Text>
        </View>
        <View style={styles.wrapperContainer}>
          <Text>Expired Date</Text>
          <TextInput
            style={styles.inputText}
            value={self.state.exp_date.toString()}
            placeholder={'exp_date'}
            onChangeText={(val) => self.setState({exp_date: val})}
          />
        </View>
        <View style={styles.wrapperContainer}>
          <Text>Harga</Text>
          <TextInput
            style={styles.inputText}
            value={self.state.harga.toString()}
            placeholder={'harga'}
            onChangeText={(val) => self.setState({harga: val})}
          />
        </View>
        <View style={styles.wrapperContainer}>
          <Text>Quantity</Text>
          <TextInput
            value={self.state.qty}
            style={styles.inputText}
            placeholder={'Qty'}
            onChangeText={(val) => self.setState({qty: val})}
          />
        </View>
        <View style={styles.wrapperContainerCenter}>
          <TouchableOpacity onPress={closeModal}>
            <AssetImage name="ic-close" />
          </TouchableOpacity>
          <TouchableOpacity onPress={actionAddUpdate}>
            <AssetImage name="ic-correct" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputText: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 4,
  },
  modalContainer: {
    margin: 20,
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 1,
    padding: 16,
  },
  wrapperContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapperContainerCenter: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    margin: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    flex: 1,
    padding: 8,
  },
  itemSelected: {
    flex: 1,
    backgroundColor: 'pink',
  },
  text: {
    fontFamily: 'Roboto',
    color: '#00A00A',
  },
  seacrView: {
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 10,
    color: '#000000',
    height: 16,
    backgroundColor: '#FFF',
  },
  bottomTab: {
    bottom: 0,
    right: 0,
    left: 0,
    padding: 8,
    backgroundColor: '#66ccff',
    flexDirection: 'row',
  },
  toolBar: {
    backgroundColor: '#66ccff',
    height: 50,
    padding: 12,
  },
});

export default NewPageStuff;
