import React from 'react';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-foreground">Welcome to CodeLearner</h1>
      </main>
    </div>
  );
};

export default Index;