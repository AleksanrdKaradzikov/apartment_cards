import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import styles from './App.module.css';
import { setDataToStateAction, changeItemAction } from '../../redux/actions';
import heartIcon from '../../assets/heart.png';

function App({ data, setDataToStateAction, changeItemAction }) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/AleksanrdKaradzikov/json-answer/main/entities.json');
      const data = await response.json();

      setTimeout(() => {
        setDataToStateAction(data.response.map((item) => ({ ...item, isLike: false, })));
        setLoading(false);  
      }, 2000);
    };

    try {  
      setLoading(true); 
      getData();
    } catch(error) {
      console.log('Ошибка запроса данных: ', error);
      setLoading(false);  
    }
  }, []);

  const handleCLick = (id) => () => {
    changeItemAction(id);
  };

  return (
    <div className={['container', styles.wrap].join(' ')}>
      {isLoading ? (
        <div>
            Загрузка данных...
        </div>
      ) : (
        <div className="row">
          {data.map(({ 
            id, 
            isLike,
            attributes: { title, area, rooms, unit, 
              address: { city, house, room, street }, 
            },
            relationships: {
              attributes: {
                first_name,
                last_name,
                middle_name,
              }
            }
          }) => {
            const btnClasses = isLike ? [styles.btnIcon, styles.active] : [styles.btnIcon];

            return (
              <div className="col-lg-4 col-md-12" key={id}>
                <div className={styles.card}>
                  <button className={btnClasses.join(' ')} type="button" onClick={handleCLick(id)}>
                    <img src={heartIcon} alt="like icon" />
                  </button>
                  <h5 className={styles.title}>{title}</h5>
                  <p>Количество комнат: {rooms}</p>
                  <p>Площадь: {area} {unit}</p>
                  <p>Владелец: {first_name} {last_name} {middle_name}</p>
                  <p>Адрес: город {city}, улица {street}, дом {house}, кв. {room} </p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  data: state,
});

const actionsCreator = {
  setDataToStateAction,
  changeItemAction,
};

export default connect(mapStateToProps, actionsCreator)(App);
