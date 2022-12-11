import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const allTabs = [
    {label: "Harry Potter", content:"On his eleventh birthday, Harry learns he is a wizard. Thus, he attends Hogwarts School of Witchcraft and Wizardry to practise magic under the guidance of the kindly headmaster Albus Dumbledore and other school professors along with his best friends Ron Weasley and Hermione Granger."},
    {label: "Ron Weasley", content:"the best friend of Harry Potter and Hermione Granger. He is a member of the Weasley family, a pure blood family that resides in 'The Burrow' outside Ottery St. Catchpole. Being the only member of the three main characters raised in magical society, he also provides insight into the Wizarding World's magical customs and traditions. Along with Harry and Hermione, he is a member of Gryffindor house."},
    {label: "Hermione Granger", content:"She first appears in the novel Harry Potter and the Philosopher's Stone, as a new student on her way to Hogwarts. After Harry and Ron save her from a mountain troll in the girls' restroom, she becomes best friends with them and often uses her quick wit, deft recall, and encyclopaedic knowledge to lend aid in dire situations. Rowling has stated that Hermione resembles herself as a young girl, with her insecurity and fear of failure."}
  ]
  const [selected, setSelected] = useState("");

  return (
    <>
      <Tabs tabs={allTabs} selectTab={setSelected} selectedTab={selected}/>
      <Display selectedTab={selected}/>
    </>
  );
}

export default App;
