import React from 'react';
import AssetImage from '../src/image/images';
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

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDum: [],
      tempDataDum: [],
      keyText: '',
      indexSelcted: -1,
      isVisiblel: false,
      noContainer: '',
      size: 0,
      type: '',
      row: 0,
      slot: 0,
      tier: 0,
      sizeData: [
        {label: '10', value: 10},
        {label: '20', value: 20},
        {label: '30', value: 30},
        {label: '40', value: 40},
        {label: '50', value: 50},
      ],
      typeData: [
        {label: 'Dry', value: 'Dry'},
        {label: 'Wet', value: 'Wet'},
        {label: 'Big', value: 'Big'},
        {label: 'Small', value: 'Small'},
        {label: 'Medium', value: 'Medium'},
      ],
      shortDepend: [
        {label: 'No Container', value: 1},
        {label: 'Type', value: 2},
        {label: 'Size', value: 3},
        {label: 'Slot', value: 4},
        {label: 'Tire', value: 5},
      ],
      sortStuff: 0,
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    const myData = [
      {
        noContainer: '1',
        size: 10,
        type: 'Wet',
        slot: 3,
        row: '2',
        tier: 2,
      },
      {
        noContainer: '2',
        size: 10,
        type: 'Dry',
        slot: 3,
        row: '2',
        tier: 2,
      },
      {
        noContainer: '3',
        size: 10,
        type: 'Dry',
        slot: 3,
        row: '2',
        tier: 2,
      },
      {
        noContainer: '4',
        size: 10,
        type: 'Dry',
        slot: 3,
        row: '2',
        tier: 2,
      },
      {
        noContainer: '5',
        size: 10,
        type: 'Dry',
        slot: 3,
        row: '2',
        tier: 2,
      },
      {
        noContainer: '1234098',
        size: 10,
        type: 'Dry',
        slot: 3,
        row: '2',
        tier: 2,
      },
      {
        noContainer: '1234098',
        size: 10,
        type: 'Dry',
        slot: 3,
        row: '2',
        tier: 2,
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
        noContainer: this.state.noContainer,
        row: this.state.row,
        slot: this.state.slot,
        size: this.state.size,
        type: this.state.type,
        tier: this.state.tier,
      },
      ...this.state.dataDum,
    ];

    this.setState({dataDum: tempData, tempDataDum: tempData});
  }

  updateValue() {
    let tempdata = [...this.state.dataDum];
    tempdata[this.state.indexSelcted] = {
      noContainer: this.state.noContainer,
      row: this.state.row,
      slot: this.state.slot,
      size: this.state.size,
      type: this.state.type,
      tier: this.state.tier,
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
        tempData.sort(this.compareType);
        break;
      case 2:
        tempData.sort(this.compareSize);
        break;
      case 3:
        tempData.sort(this.compareSlot);
        break;
      case 4:
        tempData.sort(this.compareTier);
        break;
    }

    this.setState({dataDum: tempData});
  }

  compareContainer(a, b) {
    const tempA = a.noContainer.toLowerCase();
    const tempB = b.noContainer.toLowerCase();

    let comparison = 0;
    if (tempA > tempB) {
      comparison = 1;
    } else if (tempA < tempB) {
      comparison = -1;
    }
    return comparison;
  }

  compareType(a, b) {
    const tempA = a.type.toLowerCase();
    const tempB = b.type.toLowerCase();

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

  compareSlot(a, b) {
    const tempA = a.slot;
    const tempB = b.slot;

    let comparison = 0;
    if (tempA > tempB) {
      comparison = 1;
    } else if (tempA < tempB) {
      comparison = -1;
    }
    return comparison;
  }

  compareTier(a, b) {
    const tempA = a.tier;
    const tempB = b.tier;

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
        <View style={{flex:0.2}}>
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
          style={{marginTop: 100, flex:1}}
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
                  noContainer: item.noContainer,
                  slot: item.slot,
                  type: item.type,
                  size: item.size,
                  tier: item.tier,
                  row: item.row,
                })
              }
              style={
                index == this.state.indexSelcted
                  ? styles.itemSelected
                  : styles.item
              }>
              <Text
                style={
                  styles.text
                }>{`Nomor Container : ${item.noContainer}`}</Text>
              <Text style={styles.text}>{`Slot : ${item.slot}`}</Text>
              <Text style={styles.text}>{`Size : ${item.size}`}</Text>
              <Text style={styles.text}>{`Type : ${item.type}`}</Text>
              <Text style={styles.text}>{`Tier: ${item.tier}`}</Text>
              <Text style={styles.text}>{`Row: ${item.row}`}</Text>
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
              noContainer: '',
              slot: 0,
              size: 0,
              row: 0,
              type: '',
              tier: 0,
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
          <Text>Nomor Container</Text>
          <TextInput
            style={styles.inputText}
            editable={self.state.indexSelcted === -1}
            value={self.state.noContainer}
            placeholder={'No Container'}
            onChangeText={(val) => self.setState({noContainer: val})}
          />
        </View>
        <View style={styles.wrapperContainer}>
          <Text>Size</Text>
          <DropDownPicker
            disabled={self.state.indexSelcted != -1}
            placeholder="Pilih size"
            items={self.state.sizeData}
            defaultValue={self.indexSelcted == -1 ? '' : self.state.size}
            containerStyle={{height: 30, width: 200}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) =>
              self.setState({
                size: item.value,
              })
            }
          />
        </View>
        <View style={styles.wrapperContainer}>
          <Text>Type</Text>
          <DropDownPicker
            disabled={self.state.indexSelcted != -1}
            showArrow={true}
            placeholder="Pilih type"
            items={self.state.typeData}
            defaultValue={self.indexSelcted == -1 ? '' : self.state.type}
            containerStyle={{height: 30, width: 200}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) =>
              self.setState({
                type: item.value,
              })
            }
          />
        </View>
        <View style={styles.wrapperContainer}>
          <Text>Slot</Text>
          <TextInput
            style={styles.inputText}
            value={self.state.slot.toString()}
            placeholder={'Slot'}
            onChangeText={(val) => self.setState({slot: val})}
          />
        </View>
        <View style={styles.wrapperContainer}>
          <Text>Tier</Text>
          <TextInput
            style={styles.inputText}
            value={self.state.tier.toString()}
            placeholder={'Tier'}
            onChangeText={(val) => self.setState({tier: val})}
          />
        </View>
        <View style={styles.wrapperContainer}>
          <Text>Row</Text>
          <TextInput
            value={self.state.row}
            style={styles.inputText}
            placeholder={'Row'}
            onChangeText={(val) => self.setState({row: val})}
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

export default MainPage;
