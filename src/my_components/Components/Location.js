import { usePlacesWidget  } from "react-google-autocomplete";

export default () => {
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyBD93F7Hop_K-deZ5aeOeaK2dCZVbIBoR8",
    onPlaceSelected: (place, inputRef, autocompleteRef) => {    
      document.getElementById('cityLat').value = autocompleteRef.getPlace().geometry.location.lat();
      document.getElementById('cityLng').value = autocompleteRef.getPlace().geometry.location.lng();
    },
    options: {
      types: ["(regions)"],
      //componentRestrictions: { country: "" },
    },
  });



  return( 
    <>
    <input ref={ref} id="pactargetlocation" className="w-full bg-transparent text-dark h-[60px] text-sm ant-input ant-input-lg pac-target-input" placeholder="Search “Thailand, Asia”" />
    <input type="hidden" id="cityLat" name="location_lat" />
    <input type="hidden" id="cityLng" name="location_lng" />   
    </>
    )
  };

