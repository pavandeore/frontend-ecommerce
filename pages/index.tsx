import Head from "next/head";
import Image from "next/image";
import Item from "../components/Item";
import Cart from "../components/Cart";
import { databaseAtom } from "../atoms/cartAtom";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { GetStaticProps } from "next";

export default function Home({ projects, storeData }) {
  const [items, setItems] = useAtom(databaseAtom);

  useEffect(() => {
    setItems(storeData.data);
  }, []);

  const listItems = items.map((item) => <Item item={item} />);

  return (
    <div className="px-5">
      <div className="d-flex justify-content-between">
        <h1 className="text-center my-3 mt-5"> Soem ecommerce blah blah </h1>
        <Cart />
      </div>

      <div className="d-flex my-4 pt-4 mt-5">{listItems}</div>

      {/*       
      <div style={{marginTop: '30px'}}>
          {
            projects.map( project => <p key={project.project_id}> { project.title } </p> )
          }
      </div> 
      
  */}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:8000/");
  const storeData = await res.json();

  return {
    props: {
      storeData,
    },
  };
};
