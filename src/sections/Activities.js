import React from "react";
import SingleActivity from "../components/SingleActivity";

export const Activities = () => {
  const activities = [
    {
      title: "Opera House",
      brief: "Opera House",
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
    },
    {
      title: "Opera House",
      brief: "Opera House",
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
    },
    {
      title: "Opera House",
      brief: "Opera House",
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
    },
    {
      title: "Opera House",
      brief: "Opera House",
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
    },
    {
      title: "Opera House",
      brief: "Opera House",
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
    },
    {
      title: "Opera House",
      brief: "Opera House",
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
    },
  ];
  return (
    <div>
      <section className="py-8">
        <div className="max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
            {activities.map((activity) => (
              <SingleActivity activity={activity} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
