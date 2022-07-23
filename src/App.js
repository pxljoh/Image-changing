//import Count from "./Components/Count";
//import CountTwo from "./Components/CountTwo";
import Reply from "./Components/Reply";
import UserCard from "./Components/UserCard";
//import UserCard2 from "./Components/UserCard2";
//y<Form />import Form from "./Components/Form";
function App() {
  return (
    <div className="App flex flex-wrap ">
      <UserCard img="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png" name="Charmeleon" title="Fire" description="This is the description area for this Pokemon card."/>
      <UserCard img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fpikachu-clipart-jpeg-3.png&f=1&nofb=1" name="Pikachu" title="Lighting" description="This is the description area for this Pokemon card."/>
      <UserCard img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F4252%2Ff%2F2016%2F114%2Ff%2F8%2F007_squirtle_by_tzblacktd-da00pu1.png&f=1&nofb=1" name="Squirtle" title="Lighting" description="This is the description area for this Pokemon card."/>
      <Reply />
    </div>
  );
}

export default App;
