import { Link, router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import {
  Alert,
  FlatList,
  TouchableOpacity,
  Pressable,
  Text,
  View,
} from "react-native";
import { useStore } from "../store/auth";
import { useCategories } from "../store/categories";

export default function Index() {
  const { profile, setIsLoggedIn, setProfile }: any = useStore();
  const { categories }: any = useCategories();

  const LogOutHandler = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          await SecureStore.deleteItemAsync("token");
          setIsLoggedIn(false);
          setProfile(null);
          router.replace("/(auth)/login");
        },
      },
    ]);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        padding: 20,
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {/*welcome+Logout */}
      {profile?.id ? (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Welcome {profile?.email}
          </Text>
          <Pressable
            style={{
              backgroundColor: "black",
              padding: 10,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={LogOutHandler}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
              }}
            >
              Log Out
            </Text>
          </Pressable>
        </View>
      ) : null}
      {/* Categories List */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "#cfb8b8",
              padding: 15,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() =>
              router.push(`./(standalone)/Items?categoryId=${item.id}`)
            }
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
<View
  style={{
    backgroundColor: "#cfb8b8ff",
    padding: 10,
    borderRadius: 10,
  }}
>
  <View>
    <Link
      href="/(auth)/login"
      style={{
        padding: 10,
        backgroundColor: "black",
        borderRadius: 10,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 18,
        }}
      >
        Go to Login
      </Text>
    </Link>
    <Link
      href="./(auth)/register"
      style={{
        padding: 10,
        backgroundColor: "black",
        borderRadius: 10,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 18 }}>Go to Register</Text>
    </Link>
  </View>
</View>;

  );
}
    
