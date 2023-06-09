import { StatusBar,Dimensions,StyleSheet } from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;




export const colors={
    ThemeBlack:'#111111',
    
    grey:'#34363A',
    grey2:'#748c94',
    white:'#f2f2f2',
    font:'#090807',

    midBoxWhite:'#ffffff'
}

export const parameters={
    statusBarHeight :STATUSBAR_HEIGHT,
    headerHeight:90,
    SCREEN_WIDTH:Dimensions.get('window').width,
    SCREEN_HEIGHT:Dimensions.get('window').height
}
export const errors={
    fontColor:'red'
}
export const globalStyles = StyleSheet.create({
    button1:{
        height:50,
        width:350,
        backgroundColor:colors.ThemeBlack,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        // marginTop:50
    },
    button1Text:{
        color:colors.white,
        fontSize:22,
        fontFamily:'Roboto',
        marginTop:-2
    },
    alreadyContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    button2:{
        alignSelf:'center',
        alignItems:"center",
        justifyContent:"center",
    },
    button2Text:{
        color:colors.font,
        fontSize:20,
        fontWeight:'bold',
        textDecorationLine:"underline",
        fontFamily:'Roboto',
        marginTop:-2
    },
    smallText:{
        fontSize:20,
        alignSelf:'center',
        marginRight:10
    },
    input: {
        borderColor: "#F1F2F3",
        borderWidth: 1,
        padding:15,
        paddingLeft:20,
        borderRadius: 50,
        marginBottom:10,
        height:60,
        backgroundColor:"#F1F2F3"
    },
    txtInputIcon:{
        width:20,
        height:20
    }
})

export const mapStyle=[
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#d6e2e6"
        }
    ]
},
{
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#cfd4d5"
        }
    ]
},
{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#7492a8"
        }
    ]
},
{
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "lightness": 25
        }
    ]
},
{
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#dde2e3"
        }
    ]
},
{
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#cfd4d5"
        }
    ]
},
{
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#dde2e3"
        }
    ]
},
{
    "featureType": "landscape.natural",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#7492a8"
        }
    ]
},
{
    "featureType": "landscape.natural.terrain",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#dde2e3"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#588ca4"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
        {
            "saturation": -100
        }
    ]
},
{
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#a9de83"
        }
    ]
},
{
    "featureType": "poi.park",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#bae6a1"
        }
    ]
},
{
    "featureType": "poi.sports_complex",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#c6e8b3"
        }
    ]
},
{
    "featureType": "poi.sports_complex",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#bae6a1"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#41626b"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
        {
            "saturation": -45
        },
        {
            "lightness": 10
        },
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#c1d1d6"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#a6b5bb"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#9fb6bd"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#ffffff"
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#ffffff"
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "labels.icon",
    "stylers": [
        {
            "saturation": -70
        }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#b4cbd4"
        }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#588ca4"
        }
    ]
},
{
    "featureType": "transit.station",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#008cb5"
        },
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "transit.station.airport",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": -5
        }
    ]
},
{
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#a6cbe3"
        }
    ]
}
]