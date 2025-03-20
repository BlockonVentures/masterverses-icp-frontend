import React from 'react';
import SectionHeader from './common/SectionHeader';
import cal from '../assets/images/cal.png';
import loc from '../assets/images/loc.png';
import event1 from '../assets/images/event-1.png';
import event2 from '../assets/images/event-2.png';
import event3 from '../assets/images/event-3.png';
import ey from '../assets/images/ev-fire.png';

const eventsData = [
  {
    id: 1,
    category: 'Category 1',
    image: event1,
    title: 'Real Madrid Leyendas vs Barça Legends | Football Match',
    date: 'April 6 | 7 PM',
    location: 'D Y Patil Sports Stadium, Navi Mumbai',
    price: '₹299',
  },
  {
    id: 2,
    category: 'Category 2',
    image: event2,
    title: 'Horn OK Please – The Happiest Food Festival 14.0',
    date: 'March 22nd & 23rd | 12PM Onwards',
    location: 'Gate No 14, Jawaharlal Nehru Stadium, Delhi',
    price: '₹499',
  },
  {
    id: 3,
    category: 'Category 3',
    image: event3,
    title: 'NH7 Weekender | Noida',
    date: 'March 29 | 5PM',
    location: 'The Great India Place Mall, Noida',
    price: '₹399',
  },
];

const TrendingEvents = () => {
  return (
    <section className='trending_events_section'>
      <div className='container'>
        <SectionHeader title='Listing Events'  url={ey} />
        <div className='treanding_event_card_wrapper row'>
          {eventsData.map((event) => (
            <div className='col-lg-4' key={event.id}>
              <div className='treanding_event_card_wrap'>
                <span className='badge_custom'>{event.category}</span>
                <img src={event.image} alt={event.title} />
                <div className='treanding_event_card_wrap_content'>
                  <h5>{event.title}</h5>
                  <div>
                  <p><img src={cal} alt='calendar' /> {event.date}</p>
                  <p><img src={loc} alt='location' /> {event.location}</p>
                  <div className='treanding_event_card_wrap_content_down'>
                    <p>{event.price}</p>
                    <button>| Buy now</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingEvents;