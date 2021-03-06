import React, {Component} from 'react';
// image gallery
import ImageGallery from 'react-image-gallery';

class HotelsResultListItem extends Component {
    /**
     *  Hotel data model
        {
            "id": "47900",
            "description": "<p><b>Ubicación del establecimiento</b> <br />En Hotel Avenida Gran Via gozarás de una ubicación céntrica en Madrid, a pocos pasos de Plaza de Callao y Plaza del Carmen.  Este hotel se encuentra cerca de Plaza Mayor y de Museo del Prado.</p><p><b>Habitaciones</b> <br />Te sentirás como en tu propia casa en una de las 35 habitaciones con aire acondicionado, minibar y televisor de plasma. La conexión a Internet wifi gratis te mantendrá en contacto con los tuyos; también podrás ver tu programa favorito en el televisor con canales digitales. El baño privado con ducha está provisto de artículos de higiene personal gratuitos y secador de pelo. Las comodidades incluyen caja fuerte (cabe un portátil) y tabla de planchar con plancha, además de un servicio de limpieza disponible todos los días.</p><p><b>Servicios</b> <br />Aprovecha los prácticos servicios que se te ofrecen, como conexión a Internet wifi gratis o asistencia turística y para la compra de entradas.</p><p><b>Para comer</b> <br />Con cafetería y snack-bar o delicatessen a tu disposición, tienes para elegir a la hora de comer algo. Disfruta de un cóctel gratuito de bienvenida, donde podrás conocer a otros huéspedes mientras tomas un bocado.</p><p><b>Servicios de negocios y otros</b> <br />Tendrás centro de negocios, servicio de recepción 24 horas y atención multilingüe a tu disposición.</p>",
            "name": "Hotel Avenida Gran Via",
            "geo_position": {
                "latitude": 40.4198,
                "longitude": -3.70416
            },
            "images": [
                {
                    "id": "41614480",
                    "url": "//images.almundo.com/201/1000000/980000/973500/973406/973406_69_b.jpg"
                },
            ],
            "amenities": [
                {
                    "code": "bar",
                    "description": "bar"
                },
                {
                    "code": "beach-pool-facilities",
                    "description": "instalaciones en playa/piscina"
                },
                {
                    "code": "check-in",
                    "description": "check-in 24hs"
                },
                {
                    "code": "coffee-shop",
                    "description": "tienda de café"
                },
                {
                    "code": "internet",
                    "description": "internet"
                },
                {
                    "code": "tours-ticket-assistance",
                    "description": "asistencia turística"
                }
            ],
            "stars": 3,
            "recommended": true,
            "checkin_time": "2:00 PM",
            "checkout_time": "12:00 PM",
            "hotel_chain": "",
            "rating_summary": {},
            "rate": {
                "id": "8216d9b3-5847-412b-b88a-800138234dcd",
                "price": {
                    "per_night": 1519.74,
                    "total": 21276.2949,
                    "discount": {
                    "amount": 2364.3,
                    "percentage": 10
                },
                "currency": {
                    "id": 1802240,
                    "code": "ARS",
                    "mask": "$",
                    "ratio": 16.1
                },
                "price_without_discount": 23640.5949,
                "price_per_night_per_room": 1688.62,
                "total_with_operation_cost": 22340.109645,
                "charges": [
                    {
                        "amount": 175.8371479255111,
                        "type": "VAT",
                        "description": "VAT",
                        "included": true
                    }
                ],
                "show_amount": 17583.714793564268,
                "show_amount_per_night_per_room": 1255.98,
                "show_amount_with_operation_cost": 18462.90053324248,
                "show_amount_per_night_per_room_without_discount": 1395.53
                },
                "smoking_preference": {},
                "meal_plan": {
                    "code": "ROOM_ONLY",
                    "description": "solo la habitación"
                },
                "payment_method": {
                    "code": "PREPAID",
                    "description": "Paga en cuotas"
                },
                "refundable": false,
                "promotion": "",
                "cancel_policies": [],
                "free_cancel_date": {
                    "date": 0,
                    "month": "",
                    "monthNumber": 0,
                    "day": "",
                    "year": 0,
                    "plain": ""
                }
            },
            "payment_methods": [
                {
                    "code": "PREPAID",
                    "description": "Paga en cuotas"
                },
                {
                    "code": "PAY_AT_DESTINATION",
                    "description": "Paga en destino"
                }
            ],
            "slug": "hotel-avenida-gran-via-47900",
            "defaultPaymentMethod": "PREPAID"
        }
     */

    render () {
        const hotel = this.props.hotel;

        return (
            <li className="HotelsResultListItem">

                {this._renderDiscountLabel(hotel.rate.price.discount)}

                {/* IMAGE GALLERY */}
                <div className="gallery-container">
                    {this._isRecommended(hotel.recommended)}
                    {this._rendeGallery(hotel.images)}
                </div>

                {/* DESCRIPTION */}
                <div className="description-container">
                    <h2>{hotel.name}</h2>

                    <div className="stars-list">
                        {this._renderStars(hotel.stars)}
                    </div>

                    {this._renderMealPlan(hotel.rate.meal_plan)}

                    <div className="amenities-list">
                        {this._renderAmenities(hotel.amenities)}
                    </div>

                </div>
                
                {/* PRICE */}
                {this._renderPriceBlock(hotel)}
            </li>
        );
    }

    // render subComponents methods
    _renderStars(stars) {
        let StarList = [];

        for (var i = 0; i < stars; i++) {
            StarList.push(<i className="material-icons" key={i}>star rate</i>); 
        }

        return StarList
    }

    _rendeGallery(collection) {
        let imagesCollection = [];

        collection.map((image) => {
            return imagesCollection.push({original: `http:${image.url}`});
        });

        return (
            <ImageGallery
                items={imagesCollection}
                infinite={false}
                showThumbnails={false}
                lazyLoad={true}
                showFullscreenButton={false}
                showPlayButton={false}
                slideInterval={2000} />
            );
    }

    _isRecommended(bool) {
            return bool ? <span className="item-recommended">¡Hotel recomendado!</span> : null;
    }

    _renderMealPlan(plan) {        
        return <p className="meal-plan">{plan.code === "ROOM_ONLY" ? <i className="material-icons">hotel</i> : ''} <span>{plan.description}</span></p>;
    }

    _renderAmenities(list) {
        let itemList = [];

        for (let i = 0; i < list.length; i++) {
            if (itemList.length > 5) {
                 break;
            } else {
                itemList.push(<i className="material-icons" key={i}>{switchIcons(list[i])}</i>);
            }
        }

        return itemList;
    }

    _renderPriceBlock(hotel) {
        return (
            <div className="price-container">
                <p>Precio por noche por habitación</p>

                <span className="price-amount">
                    <span className="price-amount-currency">{hotel.rate.price.currency.code}</span>
                    <span className="price-amount-display-price">{Number(hotel.rate.price.show_amount_per_night_per_room.toFixed(0)).toLocaleString()}</span>
                </span>

                <p>Impuestos y tasas no incluidos</p>

                <a href="#" className="btn btn-action" title="Ver hotel">Ver hotel</a>

                {
                    hotel.payment_methods.map((item) => {
                        return <strong key={item.code}>{item.description}</strong>;
                    })
                }

            </div>
        )

    }

    _renderDiscountLabel(discount) {
        let box = (
            <div className="discount-label">
                <span>{discount.percentage}%</span>
                <span>OFF</span>
            </div>
        );

        return discount.percentage !== 0 ? box : null;
    }

}

function switchIcons(icon) {
    switch (icon.code) {
        case "coffee-shop":
            return 'local_cafe';
        case "bar":
            return 'local_bar';
        case "beach-pool-facilities":
            return 'beach_access';
        case "check-in":
            return 'check_box';
        case "internet":
            return 'wifi';
        case "tours-ticket-assistance":
            return 'local_play';
        case "fitness-center":
            return 'fitness_center';
        case "hair-salon":
            return 'content_cut';
        case "meeting-rooms":
            return 'group';
        case "business-center":
            return 'business_center';
        case "housekeeping":
            return 'brush';
        case "safety-box":
            return 'lock';
        case "air-condition":
            return 'ac_unit';
        case "children-club":
            return 'child_care';
        case "garden":
            return 'local_florist';
        case "television":
            return 'tv';
        case "parking":
            return 'local_parking';
        case "pool":
            return 'pool';
        case "restaurant":
            return 'restaurant';
        case "smoking-areas":
            return 'smoking_rooms';
        default:
            break;
    }
}

export default HotelsResultListItem;