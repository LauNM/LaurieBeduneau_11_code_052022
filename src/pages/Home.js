import {useEffect} from "react";

function Home() {
  useEffect(() => {
    fetch(`https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`)
      .then((response) => response.json()
        .then(({ surveyData }) => console.log(surveyData))
        .catch((error) => console.log(error))
      )
  }, [])
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home;