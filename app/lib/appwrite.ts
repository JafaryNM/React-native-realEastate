import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";
import * as linking from "expo-linking";
import { red } from "react-native-reanimated/lib/typescript/Colors";
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
  platform: "com.devele.restate",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLI_APPWRITE_PROJECT_ID,
};

export const client = new Client();

client.setEndpoint(config.endpoint!);
client.setProject(config.projectId!);
client.setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
  try {
    const redirectUri = linking.createURL("/");

    const authUrl = await account.createOAuth2Session(
      OAuthProvider.Google,
      redirectUri,
      redirectUri
    );

    if (!authUrl) {
      throw new Error("Failed to create OAuth2 session");
    }

    const browserResult = await openAuthSessionAsync(
      authUrl.toString(),
      redirectUri
    );

    if (browserResult.type !== "success" || !browserResult.url) {
      throw new Error("Authentication failed");
    }

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret");
    const userId = url.searchParams.get("userId");

    if (!secret || !userId) {
      throw new Error("Failed to retrieve authentication tokens");
    }

    const session = await account.createSession(userId, secret);

    if (!session) {
      throw new Error("Failed to create a session");
    }

    return true;
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
}

export async function logout() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
}

export async function getLoginUser() {
  try {
    const response = await account.get();
    if (response.$id) {
      const userAvatar = avatar.getInitials(response.name);
      return {
        ...response,
        avatar: userAvatar.toString(),
      };
    }
  } catch (error) {
    console.error("Get login user error:", error);
    return null;
  }
}
