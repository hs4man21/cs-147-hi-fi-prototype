import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import ShopIcon from "./Vector.png";
import AddIcon from "./Vector2.png";
import GreenAddIcon from "./Group.png";
import ChatIcon from "./Vector3.png";
import SendIcon from "./Send.png";
import LeftIcon from "./Vector4.png";
import SettingsIcon from "./Vector5.png"
import TrashIcon from "./TrashIcon.png";
import PhotoTips from "./photo_tips.png";
import SampleItem1 from "./large.png";
import SampleItem2 from "./image2.png";
import PencilIcon from "./Vector6.png";
import SkateboardPic from "./image-7.png";
import SkateboardPic2 from "./image-8.png";
import Delete1 from "./delete-1.png";
import Delete2 from "./delete-2.png";
import Cam1 from "./Camera1.png";
import Cam2 from "./Camera2.png";
import Cam3 from "./Camera3.png";
import Cam4 from "./Camera4.png";
import BG from "./BG.png";
import GreenMsgIcon from "./GreenMsgIcon.png";
import Frame1 from "./Frame1.png";
import VectorGreenMsg from "./Vector-green-msg.png";
import { Alert, StyleSheet, Text, View, ScrollView, TextInput, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { NativeRouter, Route, Link } from "react-router-native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const Stack = createStackNavigator();
global.skateboard = [];
global.secondPhoto = false;
global.firstPhoto = true;
global.kettle = true;

function Header(props) {
  return (
    <View style={{ position: "absolute", paddingTop: 25, backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: vh(10) }}>
      {/* <ImageBackground source={LeftIcon} style={{ width: 21, height: 20, resizeMode: 'cover' }}>
        <Button title=" " />
      </ImageBackground> */}
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>{props.text}</Text>
      {props.noFilter ? null : <Button color="#49A5A9" title="Filter" />}
      {/* <ImageBackground source={SettingsIcon} style={{ width: 30, height: 30, resizeMode: 'cover' }}>
        <Button title=" " />
      </ImageBackground> */}
    </View>
  );
}

function Footer(props) {
  return (
    <View style={{ position: "absolute", bottom: 30, display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", height: vh(5) }}>
      <ImageBackground source={props.selected ? ShopIcon : Frame1} style={{ width: 28, height: 35, resizeMode: 'cover' }}>
        <Button title=" " onPress={() => props?.theNavigation?.navigate("My items")} />
      </ImageBackground>
      <ImageBackground source={AddIcon} style={{ width: 38, height: 38, resizeMode: 'cover' }}>
        <Button title=" " onPress={() => props?.theNavigation?.navigate("Cam1")} />
      </ImageBackground>
      <ImageBackground source={props.selected ? ChatIcon : GreenMsgIcon} style={{ width: 37, height: 35, resizeMode: 'cover' }}>
        <Button title=" " onPress={() => props?.theNavigation?.navigate("Messages")} />
      </ImageBackground>
    </View>
  );
}

function Item(props) {
  return (
    <>
      <Image source={props.src} style={{ width: "80%", resizeMode: "contain", marginRight: "auto", marginLeft: "auto", marginTop: "10%" }} />
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "5%", marginBottom: "15%" }}>
        <View style={{}}>
          <Text style={{ marginRight: "auto", marginLeft: "auto" }} >{props.name}</Text>
          <Text style={{ marginRight: "auto", marginLeft: "auto" }}>{props.price}</Text>
          <Text style={{ marginRight: "auto", marginLeft: "auto" }}>{props.postDate}</Text>
        </View>
        {/* <Image source={PencilIcon} style={{ width: 21, height: 20 }} /> */}
      </View>
    </>
  );
}

function DraftItem(props) {
  return (
    <>
      <Image source={props.src} style={{ height: props.postDate === "Posted 3/19" ? 200 : "auto", width: props.postDate === "Posted 3/19" ? 200 : "80%", resizeMode: props.postDate === "Posted 3/19" ? "fill" : "contain", marginRight: "auto", marginLeft: "auto", marginTop: "10%" }} />
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "5%", marginBottom: "15%" }}>
        <View style={{}}>
          <Text style={{ color: "#FF7248", marginRight: "auto", marginLeft: "auto" }} >{`${props.name} (DRAFT)`}</Text>
          <Text style={{ color: "#FF7248", marginRight: "auto", marginLeft: "auto" }}>{props.price}</Text>
          <Text style={{ marginRight: "auto", marginLeft: "auto" }}>{props.postDate}</Text>
        </View>
        {/* <Image source={PencilIcon} style={{ width: 21, height: 20 }} /> */}
      </View>
    </>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Log in")}>
      <ImageBackground source={PhotoTips} style={{ marginTop: -vh(4), width: vw(100), height: vh(100) }}>
      </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}

function Cam1Screen({ navigation }) {
  return (
    <View>
      <ImageBackground source={Cam1} style={{ marginTop: -vh(10), width: vw(100), height: vh(100) }}>
        <View style={{ top: vh(78), width: "25%", marginLeft: "auto", marginRight: "auto" }}>
          <Button title="   " onPress={() => navigation.navigate("Cam2")} />
        </View>
      </ImageBackground>
    </View>
  )
}

function Cam2Screen({ navigation }) {
  return (
    <View>
      <ImageBackground source={Cam2} style={{ marginTop: -vh(10), width: vw(100), height: vh(100) }}>
        <View style={{ top: vh(78), width: "20%", marginRight: "auto", marginLeft: "auto" }}>
          <Button title="    " onPress={() => {
            global.firstPhoto = true;
            global.secondPhoto = false;
            navigation.navigate("Post item");
          }} />
        </View>
      </ImageBackground>
    </View>
  )
}

function Cam3Screen({ navigation }) {
  return (
    <View>
      <ImageBackground source={Cam3} style={{ marginTop: -vh(10), width: vw(100), height: vh(100) }}>
        <View style={{ top: vh(78), width: "20%", marginRight: "auto", marginLeft: "auto" }}>
          <Button title="    " onPress={() => navigation.navigate("Cam4")} />
        </View>
      </ImageBackground>
    </View>
  )
}

function Cam4Screen({ navigation }) {
  return (
    <View>
      <ImageBackground source={Cam4} style={{ marginTop: -vh(10), width: vw(100), height: vh(100) }}>
        <View style={{ top: vh(78), width: "20%", marginRight: "auto", marginLeft: "auto" }}>
          <Button title="    " onPress={() => {
            global.secondPhoto = true;
            navigation.navigate("Post item");
          }} />
        </View>
      </ImageBackground>
    </View>
  )
}

function Delete1Screen({ navigation }) {
  return (
    <View>
      <ImageBackground source={Delete1} style={{ marginTop: -vh(10), width: vw(100), height: vh(100) }}>
        <View style={{ top: vh(78), width: "20%", marginRight: "auto", marginLeft: "auto" }}>
          <Button title="    " onPress={() => Alert.alert("Are you sure you want to discard?", "This action cannot be undone.", [{ text: "Yes, discard", onPress: () => {
            global.firstPhoto = false;
            navigation.navigate("Post item");
          }}, { text: "Cancel", style: "cancel" }])}/>
        </View>
      </ImageBackground>
    </View>
  )
}

function Delete2Screen({ navigation }) {
  return (
    <View>
      <ImageBackground source={Delete2} style={{ marginTop: -vh(10), width: vw(100), height: vh(100) }}>
        <View style={{ top: vh(78), width: "20%", marginRight: "auto", marginLeft: "auto" }}>
          <Button title="    " onPress={() => Alert.alert("Are you sure you want to discard?", "This action cannot be undone.", [{ text: "Yes, discard", onPress: () => {
            global.secondPhoto = false;
            navigation.navigate("Post item");
          }}, { text: "Cancel", style: "cancel" }])}/>
        </View>
      </ImageBackground>
    </View>
  )
}

function LogInScreen({ navigation }) {

  const [emailValue, onChangeEmail] = React.useState('Email');
  const [passwordValue, onChangePassword] = React.useState('Password');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginTop: -80, fontSize: 30, fontWeight: "bold" }}>Log In</Text>
      <TextInput
        style={{ paddingLeft: 5, marginTop: 40, height: 40, width: "80%", backgroundColor: 'lightgray', borderRadius: 10 }}
        onChangeText={text => onChangeEmail(text)}
        placeholder={emailValue}
      />
      <TextInput
        style={{ paddingLeft: 5, marginTop: 20, height: 40, width: "80%", backgroundColor: 'lightgray', borderRadius: 10 }}
        onChangeText={text => onChangePassword(text)}
        placeholder={passwordValue}
      />
      <TouchableOpacity style={{ marginTop: 100, width: "80%", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12, backgroundColor: "#24888E" }} onPress={() => navigation.navigate("My items")} >
        <Text style={{ alignSelf: "center", fontSize: 18, color: "#fff", fontWeight: "bold" }}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

function EditItem({ navigation }) {
  return (
    <>
    <View style={{ paddingTop: vh(8), height: vh(90), backgroundColor: "white" }}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <Button title="Back" color="#49A5A9" onPress={() => navigation.navigate("My items")} />
      <TouchableOpacity style={{ marginLeft: 220, marginRight: 10 }} onPress={() => Alert.alert("Are you sure you want to discard?", "This action cannot be undone.", [{ text: "Yes, discard", onPress: () => {
            global.kettle = false;
            navigation.navigate("My items");
          }}, { text: "Cancel", style: "cancel" }])}>
        <Image source={TrashIcon} />
      </TouchableOpacity>
      </View>
      <View style={{ width: "50%", marginTop: 70, marginLeft: 95 }}>
        <Image source={SampleItem1} />
      </View>
      <View style={{ marginTop: "5%", marginLeft: "10%", width: "80%", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
        <View>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Electric Kettle</Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>Posted 2/20</Text>
      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>$40</Text>
      <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "bold" }}>Like New</Text>
      <Text style={{ marginTop: 20, fontSize: 16 }}>This kettle has been used once, but then I stopped eating meals with heated water, so I no longer have a need for it. There are no noticeable signs of use other than the fact that the product has been taken out of the original packaging.</Text>
      </View>
      </View>
    </View>
    <Footer theNavigation={navigation} selected />
    </>
  )
}

function MyItemsScreen({ navigation }) {

  const [searchValue, onChangeSearch] = React.useState(null);
  const [controller, setController] = React.useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    setController(Math.random());
  }, [isFocused]);

  return (
    <>
      <Header text={"My Items"} />
      <View style={{ position: "absolute", top: vh(10), height: vh(70), flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%", backgroundColor: "white" }}>
        <TextInput
          style={{ paddingLeft: 5, marginTop: 20, height: 40, width: "80%", backgroundColor: 'lightgray', borderRadius: 10 }}
          onChangeText={text => onChangeSearch(text)}
          placeholder={"Search"}
        />
        <ScrollView style={{ width: "100%" }}>
          {global.skateboard.map((item) => item.draft ? <DraftItem src={SkateboardPic} name={item.name} price={`${item.price}, ${item.use}`} postDate={"Posted 3/19"} /> : <Item src={SkateboardPic} name={item.name} price={`${item.price}, ${item.use}`} postDate={"Posted 3/19"} />)}
          {global.kettle && <TouchableOpacity onPress={() => navigation.navigate("Edit item")}>
            <Item src={SampleItem1} name={"Electric Kettle"} price={"$40, Like New"} postDate={"Posted 2/20"} />
          </TouchableOpacity>}
          <Item src={SampleItem2} name={"Mug"} price={"$8, Used"} postDate={"Posted 1/29"} />
        </ScrollView>
      </View>
      <Footer theNavigation={navigation} selected />
    </>
  );
}

function ChatBlock(props) {
  return (
    <View style={{ marginTop: 18, paddingBottom: 18, borderBottomColor: "#E8E8E8", borderBottomWidth: 1 }}>
      <View style={{ display: "flex", flexDirection: "row", margin: "auto" }}>
        <Text style={{ fontWeight: "bold", marginRight: 5 }}>{props.seller}</Text>
        <Text style={{ color: "orange" }}>{props.notification ? "●" : ""}</Text>
        <Text style={{ position: "absolute", right: 0, color: "#BDBDBD" }}>{props.time}</Text>
      </View>
      <Text>
        {props.item}
      </Text>
      <Text style={{ color: "#979797" }}>
        {props.text}
      </Text>
    </View>
  )
}

function MessagesScreen({ navigation }) {

  const [searchValue, onChangeSearch] = React.useState(null);
  const [controller, setController] = React.useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    setController(Math.random());
  }, [isFocused]);

  return (
    <>
      <Header text={"Messages"} />
      <View style={{ position: "absolute", top: vh(10), height: vh(70), flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%", backgroundColor: "white" }}>
        <TextInput
          style={{ paddingLeft: 5, marginTop: 20, height: 40, width: "80%", backgroundColor: 'lightgray', borderRadius: 10 }}
          onChangeText={text => onChangeSearch(text)}
          placeholder={"Search"}
        />
        <ScrollView style={{ width: "80%", margin: "auto" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Allie")} ><ChatBlock notification item="Skateboard" seller="Allie" text="Hi! I'm interested in the skateboard!" time="2hr" /></TouchableOpacity>
          <ChatBlock item="Electric Kettle" seller="Ben" text="It is!" time="1d" />
          <ChatBlock item="Electric Kettle" notification seller="Carol" text="That's unfortunate! Hope you feel..." time="3d" />
          <ChatBlock item="Computer Monitor" seller="David" text="Great! See you soon!" time="4d" />
        </ScrollView>
      </View>
      <Footer theNavigation={navigation} />
    </>
  );
}

function AllieScreen({ navigation }) {

  const [searchValue, onChangeSearch] = React.useState(null);
  const [controller, setController] = React.useState(null);
  const [responseText, setResponseText] = React.useState(null);
  const [theirResponse, setTheirResponse] = React.useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    setController(Math.random());
  }, [isFocused]);

  return (
    <>
      <Header text={"Allie"} noFilter />
      <View style={{ position: "absolute", top: vh(10), height: vh(70), flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%", backgroundColor: "white" }}>
        <Text style={{ marginTop: -25, marginBottom: 25 }}>Skateboard</Text>
        <ScrollView style={{ width: "80%", margin: "auto" }}>
          <ImageBackground source={BG} style={{ height: 120 }} imageStyle={{ resizeMode: 'contain' }}>
            <Text style={{ marginTop: 15, marginLeft: 10 }}>Hi! I'm interested in the skateboard!</Text>
          </ImageBackground>
          <ImageBackground source={VectorGreenMsg} style={{ height: 120 }} imageStyle={{ resizeMode: 'contain' }}>
            <Text style={{ color: "white", marginTop: 15, marginLeft: 10 }}>Hello!</Text>
          </ImageBackground>
          <ImageBackground source={BG} style={{ height: 120 }} imageStyle={{ resizeMode: 'contain' }}>
            <Text style={{ marginTop: 15, marginLeft: 10 }}>Are you willing to go any lower than $30?</Text>
          </ImageBackground>
          {responseText && (
            <ImageBackground source={VectorGreenMsg} style={{ height: 120 }} imageStyle={{ resizeMode: 'contain' }}>
              <Text style={{ color: "white", marginTop: 15, marginLeft: 10 }}>{responseText}</Text>
            </ImageBackground>
          )}
          {theirResponse && (
            <ImageBackground source={BG} style={{ height: 120 }} imageStyle={{ resizeMode: 'contain' }}>
              <Text style={{ marginTop: 15, marginLeft: 10 }}>Great! Just let me know when and where to meet you.</Text>
          </ImageBackground>
          )}
        </ScrollView>
        <View style={{ backgroundColor: "white", position: "absolute", bottom: 10, display: "flex", flexDirection: "row", width: "90%" }}>
            <TextInput
              style={{ paddingLeft: 5, marginTop: 20, marginLeft: 15, height: 40, width: "80%", backgroundColor: 'lightgray', borderRadius: 10 }}
              onChangeText={text => onChangeSearch(text)}
              placeholder={"Search"}
            />
            <TouchableOpacity onPress={() => {
              setResponseText(searchValue);
              window.setTimeout(() => setTheirResponse(true), 5000);
            }}>
            <Image source={SendIcon} style={{ backgroundColor: "white", marginLeft: 10, marginTop: 23, width: 35 }} />
            </TouchableOpacity>
        </View>
      </View>
      <Footer theNavigation={navigation} />
    </>
  );
}

function PostItemScreen({ navigation }) {

  const [nameValue, onChangeName] = React.useState(null);
  const [priceValue, onChangePrice] = React.useState(null);
  const [categoryValue, onChangeCategory] = React.useState(null);
  const [useValue, onChangeUse] = React.useState(null);
  const [descriptionValue, onChangeDescription] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [errorMessage2, setErrorMessage2] = React.useState(false);

  const [controller, setController] = React.useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    setController(Math.random());
  }, [isFocused]);

  return (
    <>
      <View style={{ height: vh(90), flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%", backgroundColor: "white" }}>
        <View style={{ backgroundColor: "white", display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", height: vh(10) }}>
          <Button title="Discard" onPress={() => Alert.alert("Are you sure you want to discard?", "This action cannot be undone.", [{ text: "Yes, discard", onPress: () => navigation.navigate("My items") }, { text: "Cancel", style: "cancel" }])} />
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Edit item</Text>
          <Button title="Save" onPress={() => {
          if (nameValue && priceValue && categoryValue && useValue && descriptionValue) {
            global.skateboard.unshift({ draft: true, name: nameValue, price: priceValue, category: categoryValue, use: useValue, description: descriptionValue });
            console.log(global.skateboard);
            navigation.navigate("My items");
          } else setErrorMessage(true)}}/>
        </View>
        <View style={{ width: "80%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
          <View style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center', width: 95, height: 95, borderRadius: 10, backgroundColor: "#F6F6F6" }}>
            <TouchableOpacity onPress={() => global.secondPhoto ? setErrorMessage2(true) : navigation.navigate("Cam3")}>
              <Image source={GreenAddIcon} style={{ width: 100, resizeMode: "contain" }} />
            </TouchableOpacity>
          </View>
          {global.firstPhoto && (
            <TouchableOpacity onPress={() => navigation.navigate("Delete1")}>
              <Image source={SkateboardPic} style={{ width: 100, resizeMode: "contain" }} />
            </TouchableOpacity>
          )}
          {global.secondPhoto && (
            <TouchableOpacity onPress={() => navigation.navigate("Delete2")}>
              <Image source={SkateboardPic2} style={{ width: 100, resizeMode: "contain" }} />
            </TouchableOpacity>
          )}
        </View>
        {errorMessage2 ? <Text style={{ marginTop: 10, color: "red" }}>Cannot add more pictures</Text> : null}
        <TextInput
          style={{ paddingLeft: 5, marginTop: 40, height: 40, width: "80%", borderWidth: 1, borderRadius: 10 }}
          onChangeText={text => onChangeName(text)}
          placeholder={"Name"}
        />
        <TextInput
          style={{ paddingLeft: 5, marginTop: 20, height: 40, width: "80%", borderWidth: 1, borderRadius: 10 }}
          onChangeText={text => onChangePrice(text)}
          placeholder={"Price"}
        />
        <TextInput
          style={{ paddingLeft: 5, marginTop: 20, height: 40, width: "80%", borderWidth: 1, borderRadius: 10 }}
          onChangeText={text => onChangeCategory(text)}
          placeholder={"Category"}
        />
        <TextInput
          style={{ paddingLeft: 5, marginTop: 20, height: 40, width: "80%", borderWidth: 1, borderRadius: 10 }}
          onChangeText={text => onChangeUse(text)}
          placeholder={"Quality (new, used, etc.)"}
        />
        <TextInput
          style={{ paddingLeft: 5, marginTop: 20, height: 160, width: "80%", borderWidth: 1, borderRadius: 10 }}
          onChangeText={text => onChangeDescription(text)}
          placeholder={"Description"}
        />
        <TouchableOpacity style={{ marginTop: 30, width: "80%", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12, backgroundColor: (nameValue && priceValue && categoryValue && useValue && descriptionValue) ? "#24888E" : "gray" }} onPress={() => {
          if (nameValue && priceValue && categoryValue && useValue && descriptionValue) {
            global.skateboard.unshift({ name: nameValue, price: priceValue, category: categoryValue, use: useValue, description: descriptionValue });
            console.log(global.skateboard);
            navigation.navigate("My items");
          } else setErrorMessage(true)
        }
        } >
          <Text style={{ alignSelf: "center", fontSize: 18, color: "white", fontWeight: "bold" }}>Post</Text>
        </TouchableOpacity>
        {errorMessage ? <Text style={{ marginTop: 10, color: "red" }}>Must fill all fields before posting</Text> : null}
      </View>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NativeRouter>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Log in" component={LogInScreen} options={{ headerTitle: "", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
          <Stack.Screen name="My items" component={MyItemsScreen} options={{ headerTitle: "", headerBackTitle: "Log out", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
          <Stack.Screen name="Cam1" component={Cam1Screen} options={{ headerTitle: "", headerBackTitle: "Back", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
          <Stack.Screen name="Cam2" component={Cam2Screen} options={{ headerTitle: "", headerBackTitle: "Back", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
          <Stack.Screen name="Cam3" component={Cam3Screen} options={{ headerTitle: "", headerBackTitle: "Back", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
          <Stack.Screen name="Cam4" component={Cam4Screen} options={{ headerTitle: "", headerBackTitle: "Back", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
          <Stack.Screen name="Delete1" component={Delete1Screen} options={{ headerTitle: "", headerBackTitle: "Back", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
          <Stack.Screen name="Delete2" component={Delete2Screen} options={{ headerTitle: "", headerBackTitle: "Back", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
          <Stack.Screen name="Post item" component={PostItemScreen} options={{ headerShown: false, headerTitle: "", headerBackTitle: "Back", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
          <Stack.Screen name="Messages" component={MessagesScreen} options={{ headerTitle: "", headerBackTitle: "Back", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
          <Stack.Screen name="Allie" component={AllieScreen} options={{ headerTitle: "", headerBackTitle: "Back", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
          <Stack.Screen name="Edit item" component={EditItem} options={{ headerShown: false, headerTitle: "", headerBackTitle: "Back", headerBackTitleStyle: { color: "#49A5A9" }, headerTintColor: "#49A5A9" }} />
        </Stack.Navigator>
      </NativeRouter>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
