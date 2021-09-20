import { usePlacesWidget  } from "react-google-autocomplete";

export default () => {
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyBD93F7Hop_K-deZ5aeOeaK2dCZVbIBoR8",
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options: {
      types: ["(regions)"],
      //componentRestrictions: { country: "" },
    },
  });



  return( 
    <input ref={ref} className="w-full bg-transparent text-dark h-[60px] text-sm pl-10 pr-8 ant-input ant-input-lg pac-target-input" placeholder="Search “Thailand, Asia”" />
    
    )
};

