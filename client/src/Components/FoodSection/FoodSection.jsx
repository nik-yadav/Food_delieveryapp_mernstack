import React from "react";
import Show from "../Show";
import Card from "../Card/Bard1";

const FoodSection = () => {
  const foodCategory = true;
  return (
    <div className="mx-20 mt-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <Show if={foodCategory}>
          {foodContent.map((content) => {
            return <Card key={content.id} content={content} />;
            // return <Card/>;
          })}
        </Show>
        <Show if={!foodCategory}>No Result Found</Show>
      </div>
    </div>
  );
};

export default FoodSection;
