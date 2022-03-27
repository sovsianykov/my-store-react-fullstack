import React, {memo, useCallback, useState} from "react";
import styles from "./index.module.scss";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setPage } from "@/App/Products/store/actions";

 const Paginator = ({ totalProducts, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProducts / itemsPerPage ); i++) {
    pages.push(i);
  }

  const dispatch = useDispatch();
  const setPageHandler = useCallback(
    (inc) => {
      if (currentPage + inc > 0 && currentPage + inc <= pages.length) {
        setCurrentPage((currentPage) => currentPage + inc);
        dispatch(setPage(currentPage + inc));
      }
    },
    [currentPage, dispatch, pages.length]
  );
  const currentPageHandler = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <section className={styles.paginator}>
      <div className={styles.arrowIcon}>
        <ArrowLeft onClick={() => setPageHandler(-1)} />
      </div>
      {pages.map((p) => (
        <div
          className={p === currentPage ? styles.arrowIcon_active : styles.page}
          key={p}
          onClick={() => {
            currentPageHandler(p);
            dispatch(setPage(p));
          }}
        >
          {p}
        </div>
      ))}
      <div className={styles.arrowIcon}>
        <ArrowRight onClick={() => setPageHandler(+1)} />
      </div>
    </section>
  );
};

 export default memo(Paginator);
