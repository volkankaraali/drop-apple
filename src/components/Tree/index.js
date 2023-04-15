// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// icons
import { TreeIcon } from "@/constants";

// styles
import styles from "./style.module.scss";
import Apples from "../Apples";

// redux reducers
import { handleDroppedApple, newTree } from "@/redux/slices/treeSlice";

export default function Tree() {

  const dispatch = useDispatch();

  // redux
  const { branches, droppedApple } = useSelector(state => state.tree);

  const [shake, setShake] = useState(false);
  const [displayGround, setDisplayGround] = useState(false);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => setDomLoaded(true), [branches, droppedApple]);

  const handleShake = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
      dispatch(handleDroppedApple(branches));
      handleGroundDisplay();
    }, 3000);
  }

  const handleGroundDisplay = () => {
    setDisplayGround(true);
    setTimeout(() => {
      setDisplayGround(false)
    }, 1000);
  }

  const handleNewTree = () => dispatch(newTree())

  return (

    <>
      {
        domLoaded && (
          <div className={styles.container}>
            <div className={`${styles.treeContainer} ${shake ? styles.shake : ''}`}>
              <TreeIcon />
              {
                branches.map((item, i) => (
                  <div key={i} className={`${styles.branch} ${styles[`branch${item.branch}`]}`}>
                    {
                      Array.from({ length: item.apple }).map((_, index) => (
                        <Apples key={index} position="tree" />
                      ))
                    }
                  </div>
                ))
              }
              {
                branches.length > 0
                  ? <button className={styles.shakeButton} onClick={handleShake}>shake</button>
                  : <button className={styles.newTreeButton} onClick={handleNewTree}>new tree</button>
              }

            </div>

            {
              displayGround && (
                <div className={styles.ground}>
                  <div className={styles.droppedApple}>
                    {
                      Array.from({ length: droppedApple }).map((_, index) => (
                        <Apples key={index} position="ground" />
                      ))
                    }
                  </div>
                </div>
              )
            }
          </div>
        )
      }
    </>


  )
}

