import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import "./restaurantList.css"

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        console.log(response.data.data);
        setRestaurants(response.data.data.restaurants);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  };

  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span className="text-warning">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={restaurant.id} />
        <span className="text-warning ml-1">({restaurant.count})</span>
      </>
    );
  };

  return (
    
   
    <div className="list-group">
      <table className="table table-striped table-hover ">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Service Provider</th>
            <th scope="col">Type</th>
            <th scope="col">Date</th>
            <th scope="col">Ratings</th> 
           
           
           
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr
                  onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={restaurant.id}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.type}</td>
                  <td>{restaurant.date}</td>
                  <td>{renderRating(restaurant)}</td>
                  <td>
                   
                  </td>
                  <td>
                   

                  <button  onClick={(e) => handleDelete(e, restaurant.id)} type="button" className="btn btn-danger btn-sm px-3">
                  <i class="fas fa-times"></i>
                  
                  </button>
                  </td>
                </tr>
              );
            })}
          
        </tbody>
      </table>
      </div>
    
    
  );
};

export default RestaurantList;
