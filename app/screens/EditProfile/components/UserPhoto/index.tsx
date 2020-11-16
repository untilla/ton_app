import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  TextStyle,
  Text,
  TouchableOpacity,
  Platform,
  ImageStyle,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UserPhoto: React.FC = (): JSX.Element => {
  const [image, setImage] = useState<string | undefined>(undefined);
  useEffect(() => {
    const initCameraRoll = async (): Promise<void> => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    };
    initCameraRoll();
  }, []);

  const pickImage = useCallback(async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  }, []);

  return (
    <View style={styles.container}>
      {
        image ?
          (<Image source={{ uri: image }} style={styles.avatar}/>)
          :
          (<View style={styles.emptyAvatar}/>)
      }
      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.uploadText}>Upload photo</Text>
      </TouchableOpacity>
    </View>
  );
};

interface IStyle {
  container: ViewStyle,
  emptyAvatar: ViewStyle,
  avatar: ImageStyle,
  uploadText: TextStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
    marginLeft: 16,
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyAvatar: {
    borderWidth: 2,
    borderColor: '#0088CC',
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  uploadText: {
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'PT_Root_UI_Medium',
    letterSpacing: 0.25,
    color: '#0088CC',
  },
});

export default UserPhoto;
