import { SafeAreaView, View, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import NavOptions from '../component/NavOptions'
// import { AddressAutofill } from '@mapbox/search-js-react'

const HomeScreen = () => {

    const MAPBOX_ACCESS_KEY = "pk.eyJ1Ijoic2Ftbmlja2dhbW1lciIsImEiOiJjbGU1Z2E1cm4wY3RjM29xZGIxaDY1cDdlIn0.WuZAj5o5r6pxC1d4c4OnMw"

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={{ uri: "https://links.papareact.com/gzs" }}
                />

                {/* <AddressAutofill accessToken={MAPBOX_ACCESS_KEY}>
                    <input
                        autoComplete="address-line1"
                        value={value}
                    // onChange={(e) => setValue(e.target.value)}
                    />
                </AddressAutofill> */}

                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

