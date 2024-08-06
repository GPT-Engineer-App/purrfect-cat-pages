import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [funFact, setFunFact] = useState('');

  const catFacts = [
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
    "The first cat in space was a French cat named Felicette in 1963.",
    "Cats can jump up to six times their length."
  ];

  const showRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setFunFact(catFacts[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">All About Cats</h1>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-64 rounded-md mb-4"
        />
        <p className="text-lg text-gray-700 mb-4">
          Cats are fascinating creatures that have been domesticated for thousands of years. 
          Known for their independence, agility, and affectionate nature, cats make wonderful 
          companions for millions of people around the world.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-blue-500">Did You Know?</h2>
        <p className="text-gray-700 mb-4">{funFact || "Click the button below for a fun cat fact!"}</p>
        <Button 
          onClick={showRandomFact}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Show Cat Fact
        </Button>
      </div>
    </div>
  );
};

export default Index;
