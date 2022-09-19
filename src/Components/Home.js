import React from "react";
import { useState, useEffect } from "react";
import {getData} from "../services/BlogService";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  console.log('coming');
    async function fetchData() {
      const response = await getData();
      setData(response);
    }
    fetchData();
    console.log(data);
  }, []);

  const styles = {
    img: {
      height: "80%",
    },
    blogBody: {
      color: "#000",
      display: "flex",
      justifyContent: "start",
      flexDirection: "column",
      fontFamily: "'Nunito', sans-serif",
    },
    title: {
      fontSize: "30px",
      fontWeight: "bold",
      padding: "2px",
    },
    content: {
      padding: "2px",
      display: "-webkit-box !important",
      "&::WebkitLineClamp": "4",
      "&::WebkitBoxCient": "vertical",
      whiteSpace: "normal",
      width: "100%",
      height: "70px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "justify",
    },
    date: {
      fontSize: "14px",
      marginTop: "8px",
      padding: "2px",
      fontWeight: "bold",
    },
  };

  return (
    <div className="container mt-5">
      <div className="list-group">
        {data.map((e) => (
          <div
            className="list-group-item list-group-item-action flex-column align-items-start"
            key={e.id}
            style={styles.listgroup}
          >
            <div className="row">
              <div className="col-md-3 text-center">
                <img style={styles.img} src="logo192.png" alt="" />
              </div>
              <div className="col-md-9 text-left" style={styles.blogBody}>
                <div className="title" style={styles.title}>
                  {e.title}
                </div>
                <div className="content" style={styles.content}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laudantium eum itaque eius veniam fuga perferendis qui sunt
                  neque ipsa autem facere corrupti, inventore natus nesciunt
                  ullam tempora consequatur rerum at, nihil illo? Incidunt
                  doloribus dolore laborum maxime delectus accusantium, quia
                  iusto iste aliquid repellendus nihil vitae earum optio
                  quisquam repellat.
                </div>
                <div className="date" style={styles.date}>
                  Sep, Mon 23, 2022
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
