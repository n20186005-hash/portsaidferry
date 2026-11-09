import type { TopicContent } from './topic-types';

export const EN_P0: Record<string, TopicContent> = {
  'ferry-schedule': {
    title: 'Port Said Ferry Schedule: Port Said & Port Fouad Crossing Hours',
    description: 'How to check the Port Said–Port Fouad ferry schedule: two separate directions, first and last sailing status, departure intervals, night service and holiday or weather changes.',
    h1: 'Port Said and Port Fouad ferry times: what can be confirmed today?',
    card: 'Ferry schedule',
    lead: 'This page sets out what can safely be said about crossing times between Port Said and Port Fouad, and how to check operation before travelling to a boarding point. It does not show live sailings or a timetable the operator has not published.',
    facts: [
      ['First and last sailing:', 'Not confirmed by the operator; do not rely on figures from older tourism pages.'],
      ['Departure interval:', 'Not confirmed; ask the crew at the boarding point in use.'],
      ['Night service:', 'Unconfirmed; do not assume 24-hour operation.']
    ],
    sections: [
      {
        title: 'Two directions, not one timetable',
        body: ['The trip from Port Said to Port Fouad and the return from Port Fouad to Port Said are two different crossings, each with its own boarding point and queue. Even if both use the same vessel, that does not establish identical departure times or an identical last sailing.', 'In practice the schedule question becomes three questions: is the service running today, which gate is operating on your bank, and when do you come back if you need a return trip the same day.'],
        bullets: ['Confirm the boarding gate on the bank you are standing on before joining a queue.', 'Ask about the last return crossing before you depart, not after you arrive.', 'Leave extra time for shipping traffic and queues; a suggested visit length is not a sailing time.']
      },
      {
        title: 'Where current information comes from',
        body: ['The proper source for any timetable is an operator notice, the Suez Canal Authority, or instructions posted at the boarding point. Google Maps showed no opening hours when sources were reviewed on 29 October 2026, and press reports about infrastructure works do not establish a sailing timetable.', 'Undated tourism itineraries that list the ferry among free activities describe a tourism programme; they do not specify a first sailing, a departure interval or a vehicle tariff.'],
        bullets: ['Check operator notices at both banks on the day you travel.', 'Ask the crew about current operation and any temporary change of boarding route.', 'Do not build a return plan on an old photograph or a report about a project that has not opened.']
      },
      {
        title: 'What may change operation',
        body: ['Public holidays and high seasons may change arrangements, while fog, wind and vessel traffic in the canal may affect waiting or visibility. These are possible factors, not confirmed times, so instructions posted on site remain the reference.']
      }
    ],
    faq: [
      ['Does the ferry run 24 hours a day?', 'No current operator-confirmed timetable establishes that. Older reports are not enough to prove night service; check operator notices and crew instructions before travelling at night.'],
      ['Do pedestrians and cars have different hours?', 'Boarding routes and queues may differ by crossing type and vessel, but no confirmed timetable exists here for any category. Ask at the gate about your category.'],
      ['How do I check return times from Port Fouad?', 'Ask about the last return crossing before leaving the west bank, then confirm the east-bank boarding order as soon as you arrive; do not assume the two directions match.']
    ]
  },

  'ferry-today': {
    title: 'Is the Port Said Ferry Running Today? How to Check',
    description: 'Practical steps to verify whether the Port Said ferry is operating today: official notice channels, signs of a temporary suspension, and a fallback plan when operation cannot be confirmed.',
    h1: 'Is the Port Said ferry running today?',
    card: 'Operation today',
    lead: 'This page does not show a live sailing status and does not claim to synchronise operator data. It explains how to check today for yourself before travelling to the boarding point.',
    facts: [
      ['Status today:', 'No live status is published here; this is an independent planning guide.'],
      ['Where to check:', 'Operator notices, the Suez Canal Authority, and instructions at the gate.'],
      ['Weather and traffic:', 'Possible causes of change, not a confirmed schedule.']
    ],
    sections: [
      {
        title: 'Short checks before you leave',
        body: ['Start by identifying which bank you will board from, because the operating question differs between Port Said and Port Fouad. Then check the official notice or the published contact if one is available, and finally leave enough slack to change your plan if the usual route is not working.'],
        bullets: ['Identify the correct bank before checking anything else.', 'Check the official notice or crew instructions at the boarding point.', 'Ask about a temporary change to berths or gates before joining a queue.', 'Keep an alternative return option if the crossing is essential to a later appointment.']
      },
      {
        title: 'Reading the signs of a suspension',
        body: ['A closed gate, an unusual queue, or a crew member directing visitors elsewhere are on-site operating instructions, not decorative details on a web page. If the crew is redirecting people, do not wait for a planning website to confirm it.', 'If you cannot confirm operation, the safer decision is to postpone a non-essential crossing, especially when travelling with children or with someone who needs mobility assistance.']
      }
    ],
    faq: [
      ['Does this page show live operating status?', 'No. The site receives no live data from the operator and shows no live sailing or weather status; use the official notice and the instructions at the gate.'],
      ['What if I must cross today?', 'Check both banks early, allow time for waiting, and identify a fallback return option before you cross; do not rely on an assumption of continuous service.'],
      ['Does operation change on public holidays?', 'Arrangements may change during holidays and seasons, but no confirmed list of excluded dates is published here; check the operator notice for your travel day.']
    ]
  },

  'ferry-fares': {
    title: 'Port Said Ferry Fares: Passenger and Vehicle Charges',
    description: 'What is known and unknown about Port Said and Port Fouad ferry fees: pedestrians, vehicles, free-crossing claims, tickets and payment, with the limits of available sources.',
    h1: 'Port Said and Port Fouad ferry fares: passengers and vehicles',
    card: 'Fares and tickets',
    lead: 'This page explains how to think about crossing costs without publishing an unconfirmed tariff. The figure a visitor wants needs a current source from the operator, and an old tourism programme or another transport fare is not a substitute.',
    facts: [
      ['Pedestrian fare:', 'No current operator-confirmed tariff in the available sources.'],
      ['Vehicle charges:', 'Not confirmed; they may vary by vehicle class and route.'],
      ['Tickets and payment:', 'Unconfirmed; check the arrangement posted at the boarding point.']
    ],
    sections: [
      {
        title: 'What does not count as a fare source',
        body: ['Undated tourism itineraries from Port Said Governorate include the ferry among free activities. That describes an activity within a programme; it is not a current tariff for every pedestrian, vehicle or direction, and it sets no policy for private cars or motorcycles.', 'Likewise, a public bus fare is not a ferry ticket. Confusing the two is the most common mistake when searching for Port Fouad ferry fees.']
      },
      {
        title: 'How to confirm the charge',
        body: ['Ask about the charge for your specific category at the operating gate, ask whether any exemption policy is posted and who it covers, and ask whether payment happens before boarding or elsewhere. Keep a written answer or a photograph of the notice where possible, because prices and rules can change.'],
        bullets: ['Identify your category: single passenger, family, motorcycle, private car or larger vehicle.', 'Ask about charges in both directions if you plan to return the same day.', 'Do not repeat a figure heard from another visitor as an official tariff.']
      },
      {
        title: 'Cost is more than a ticket',
        body: ['Even with a clear fare there are time costs: waiting, reaching the correct bank, and returning. Include them in the cost of the crossing, especially if your day is tied to a train or a later journey.']
      }
    ],
    faq: [
      ['Is the ferry crossing free?', 'An undated tourism itinerary mentions a free activity, but that is not a current tariff for every category. Confirm charges with the operator before travelling.'],
      ['Do pedestrians and cars pay the same?', 'No verified data establishes either equality or difference. Rules may vary by vehicle class and assigned vessel; ask at the gate.'],
      ['Is there advance booking or a ticket?', 'No ticketing or advance purchase mechanism has been confirmed. Check the arrangement posted at the boarding point and do not assume an electronic ticket exists.']
    ]
  },

  'port-said-terminal': {
    title: 'Port Said Ferry Location: West Bank Boarding Point',
    description: 'The Port Said to Port Fouad boarding area: El-Gomhoreya and the customs district, Plus Code 7856+R8F, arriving on foot or by car, and what the map pin cannot prove.',
    h1: 'Port Said ferry boarding point on the west bank',
    card: 'Port Said boarding (west)',
    lead: 'This page covers the west bank only. It separates what the available map pin indicates from gate and entrance details that have not been documented by the operator.',
    facts: [
      ['Bank:', 'West bank, Port Said city.'],
      ['Known location:', '7856+R8F, El-Gomhoreya, customs district, Port Said.'],
      ['Vehicle gate:', 'Not documented; confirm the vehicle route on arrival.']
    ],
    sections: [
      {
        title: 'What the map pin establishes',
        body: ['The 7856+R8F pin refers to an area of Port Said at El-Gomhoreya and the customs district, on the west bank. It is not an address for two terminals at once, and it does not identify a pedestrian entrance, a vehicle lane or a waiting area.', 'Official reports from 2026 describe works at ferry squares and berths, but they do not name the gate operating on any given day. On-site confirmation is therefore still necessary.']
      },
      {
        title: 'Arriving and queueing',
        body: ['If you walk from central Port Said, confirm that the gate you are heading to is intended for pedestrians before joining a queue. If you arrive by car or taxi, ask about the vehicle route and where queueing is permitted, and do not stop in or across an operating entrance.', 'No documented address is published here for a vehicle holding area or for parking charges, and no reserved space should be assumed.'],
        bullets: ['Open directions to the known pin as a starting point, then follow posted guidance on site.', 'Ask how pedestrian and vehicle routes are separated.', 'Keep a plan for returning to the city centre if the gate has changed.']
      }
    ],
    faq: [
      ['Does this pin also apply to Port Fouad?', 'No. It refers to the Port Said side on the west bank. Port Fouad is on the east bank and has a separate boarding point whose address is not documented here.'],
      ['Is there parking at the boarding point?', 'No specific waiting area or charge has been confirmed. Check where stopping is allowed on arrival and do not assume a space is available.'],
      ['Is the map enough to find the gate?', 'No. The map identifies an area; the operating gate, pedestrian route and vehicle lane need confirmation from an official notice or the crew.']
    ]
  },

  'port-fouad-terminal': {
    title: 'Port Fouad Ferry Location: East Bank Boarding Point',
    description: 'What is known about the Port Fouad boarding point on the east bank, why the Port Said address is not a substitute, and how to confirm the entrance before the return trip.',
    h1: 'Port Fouad ferry boarding point on the east bank',
    card: 'Port Fouad boarding (east)',
    lead: 'This page keeps the Port Fouad bank separate from Port Said, and states the limits of what is known about passenger and vehicle entrances in the east. The west-bank address is not reused as if it served both terminals.',
    facts: [
      ['Bank:', 'East bank, Port Fouad city.'],
      ['Exact address:', 'Not documented here; no current reference identifies the gate.'],
      ['Return to Port Said:', 'Requires its own boarding arrangement confirmed before the end of the day.']
    ],
    sections: [
      {
        title: 'Why the two banks are separated',
        body: ['The familiar 7856+R8F map pin belongs to the Port Said area at El-Gomhoreya and the customs district. Using it as the address of a Port Fouad terminal places a visitor on the wrong side of the canal, which is a practical problem that rewording the address cannot fix.', 'Port Fouad is a city in its own right on the east bank, with its own streets, waterfront and residential districts. Any boarding guide has to identify the bank first.']
      },
      {
        title: 'Confirming the correct entrance',
        body: ['When you arrive in Port Fouad, identify the return point before setting off to explore, and ask about the operating passenger gate and the vehicle lane if you have a car. Reports from 2026 describe development works at berths and squares, which may involve a temporary change of route.', 'No precise address or coordinates for the east bank are published here before a documented reference exists; an absent figure is more accurate than an invented one.'],
        bullets: ['Ask about the operating gate as soon as you reach Port Fouad.', 'Confirm the return direction before moving away from the crossing area.', 'Do not use the Port Said map pin to identify the Port Fouad entrance.']
      }
    ],
    faq: [
      ['Where exactly is the Port Fouad terminal?', 'We have no documented exact address for the current east-bank gate. Confirm the entrance from an official notice or from the crew on arrival.'],
      ['Can I use the same map pin in both directions?', 'No. The available pin belongs to the Port Said side; the Port Fouad point is separate and needs on-site confirmation.'],
      ['Is the pedestrian gate different from the vehicle gate in Port Fouad?', 'The routes may be separated, but the current arrangement is not documented here; ask at the boarding point.']
    ]
  },

  'port-said-to-port-fouad': {
    title: 'Port Said to Port Fouad by Ferry: Crossing Order',
    description: 'Steps for crossing from Port Said to Port Fouad: choosing the bank and gate, queueing, what to do after arrival, and planning the return before you start.',
    h1: 'Port Said to Port Fouad: how to order the crossing',
    card: 'Port Said to Port Fouad',
    lead: 'This page is about one direction only, west to east. It gathers boarding, arrival and return into a single sequence without assuming unconfirmed times or fares.',
    facts: [
      ['Departure bank:', 'Port Said, west bank.'],
      ['Arrival bank:', 'Port Fouad, east bank.'],
      ['Return:', 'Needs separate planning; see the return-crossing guide.']
    ],
    sections: [
      {
        title: 'Order of the trip',
        body: ['Start from the known Port Said area at El-Gomhoreya and the customs district as an approximate location, then confirm the operating gate on site. Next ask about the queue for your category, whether you are on foot or with a vehicle, and do not move into a vehicle lane unless the crew directs you.', 'Before boarding, ask about the return arrangement from Port Fouad that same day. Ask this at the beginning, not after arrival, because the answer may change how long you stay on the east bank.'],
        bullets: ['Identify the operating gate on the Port Said bank.', 'Ask about your crossing category and the queue route.', 'Follow crew instructions while boarding and during the crossing.', 'Keep time for the return before the end of the day.']
      },
      {
        title: 'After arriving in Port Fouad',
        body: ['Port Fouad is more than an arrival quay: its waterfront and historic residential districts are separate destinations, each with its own access rules and route. Do not assume they all sit on one short connected walking path from the landing point.', 'Plan each destination individually and confirm that it is really on the east bank before adding it to your day.']
      }
    ],
    faq: [
      ['How long does the trip from Port Said to Port Fouad take?', 'No confirmed crossing or waiting time is published here. Leave an open time margin for boarding, shipping traffic and weather.'],
      ['Do I need a different ticket for the return?', 'No ticketing or fare mechanism has been confirmed in either direction. Ask at the boarding gate about the return arrangement and any charges.'],
      ['Can I visit Port Fouad sights and return the same day?', 'It is possible in principle, but it depends on actual operation and the last return crossing; confirm before you start and do not build the day on assumed continuous service.']
    ]
  },

  'port-fouad-to-port-said': {
    title: 'Port Fouad to Port Said by Ferry: Return Crossing',
    description: 'How to plan the return from Port Fouad to Port Said: confirming the east-bank gate, the last sailing, how it differs from the outbound trip, and linking back to central Port Said.',
    h1: 'Port Fouad to Port Said: how to plan the return',
    card: 'Port Fouad to Port Said',
    lead: 'The return crossing is the part most often left out of a plan. This page separates the east-to-west direction from the outbound trip and puts return confirmation at the start of the day rather than the end.',
    facts: [
      ['Departure bank:', 'Port Fouad, east bank.'],
      ['Arrival bank:', 'Port Said, west bank.'],
      ['Last return:', 'Not documented; ask before leaving Port Said.']
    ],
    sections: [
      {
        title: 'Why the return needs its own plan',
        body: ['A crossing operating in the outbound direction does not prove that the return gate works in the same order or even in the same place. Development works announced in 2026 and possible temporary diversions make on-site confirmation part of the trip.', 'The most practical order is to ask about the last return crossing while you are still on the Port Said bank, then confirm the east-bank gate as soon as you reach Port Fouad.']
      },
      {
        title: 'After landing in Port Said',
        body: ['The return puts you back on the west bank near El-Gomhoreya and the customs district, from which the waterfront, the Suez Canal Authority Building and Ferial Garden spread out in different directions. These are separate destinations, not a single connected promenade.', 'If you have a later appointment in or beyond the city, include the waiting and queue time inside your return margin, not after it.'],
        bullets: ['Confirm the return gate on arrival in Port Fouad.', 'Follow the pedestrian or vehicle route assigned to your category.', 'Leave extra time before any fixed appointment in Port Said.']
      }
    ],
    faq: [
      ['Are return times the same as outbound times?', 'Nothing establishes that they are. Treat the two directions as separate trips and ask about the last return crossing before you depart.'],
      ['What if the usual gate in Port Fouad is not there?', 'Look for posted guidance or ask the crew about a temporary berth change; do not assume any nearby quay is the boarding point.'],
      ['Can I return at night?', 'No current night operation has been confirmed. Do not base a return plan on an assumption of 24-hour service.']
    ]
  },

  'car-ferry': {
    title: 'Port Said Car Ferry: Vehicle Crossing Rules and Queues',
    description: 'What a driver should confirm before taking the Port Said ferry: vehicle class, queue route, possible restrictions, and the separation between the Port Said and Port Fouad banks.',
    h1: 'Taking a car on the Port Said–Port Fouad ferry',
    card: 'Cars on the ferry',
    lead: 'This page treats vehicles as a different route from pedestrians. It does not publish unconfirmed weight, height or price limits; it sets out what to ask the operator before queueing.',
    facts: [
      ['Vehicles accepted:', 'Suez Canal Authority material from 2026 describes people and vehicles crossing, but does not prove every class is accepted.'],
      ['Size and weight limits:', 'Not documented; ask before bringing a vehicle.'],
      ['Vehicle charge:', 'Not documented; confirm at the boarding gate.']
    ],
    sections: [
      {
        title: 'Questions to ask before queueing',
        body: ['Suez Canal Authority material from February and April 2026 refers to people and vehicles crossing and to works at the berths, but it does not specify that every vehicle class is accepted on every vessel or at every gate. Confirming your vehicle class therefore comes before deciding to wait in a car queue.', 'Also ask about the entry and exit route on both banks, because the vehicle gate may not sit next to the pedestrian entrance and the arrangement may change during development works.'],
        bullets: ['Which vehicle classes are accepted on this route today?', 'Are there size, weight or load restrictions?', 'Where does queueing start and where does it end after landing?', 'What charges apply to the vehicle and its passengers?']
      },
      {
        title: 'Safety while waiting and boarding',
        body: ['Stay in the assigned lane, do not cross barriers or block operating gates, and follow the crew signal when boarding, remaining stationary on deck and disembarking. An old photograph of a car on a ferry does not establish the rules in force today.', 'If the vehicle carries children or someone who needs assistance, agree in advance who stays in the car and who moves to the passenger area, according to crew instructions.']
      }
    ],
    faq: [
      ['Does the ferry accept all cars?', 'Nothing confirms that. Official material describes vehicle crossings in general, but acceptance of a specific class needs confirmation at the gate.'],
      ['Are there separate charges for cars?', 'Charges may vary by vehicle class, but no current tariff is documented here; confirm with the operator.'],
      ['Can the driver stay in the vehicle?', 'That is an operating decision made by the crew; ask when boarding and do not assume a general rule.']
    ]
  },

  'pedestrian-ferry': {
    title: 'Port Said Ferry for Pedestrians: Entrance, Waiting, Return',
    description: 'A walking-passenger guide to the Suez Canal crossing between Port Said and Port Fouad: the passenger entrance, separation from vehicle routes, waiting, and return planning without assumed hours.',
    h1: 'Crossing the Port Said ferry on foot',
    card: 'Pedestrians on the ferry',
    lead: 'Most visitors to the ferry cross on foot. This page gathers what applies to a solo traveller or a family, separate from vehicle rules, while leaving any unconfirmed operating detail marked for checking.',
    facts: [
      ['Passenger entrance:', 'Not precisely documented; identify it at the operating boarding point.'],
      ['Fare:', 'Not documented; ask whether a passenger charge applies.'],
      ['Duration:', 'No guaranteed crossing or waiting time.']
    ],
    sections: [
      {
        title: 'The passenger route',
        body: ['Start by identifying the gate intended for individuals on the bank you are on, and do not follow a car queue on the assumption that it leads to the same boarding point. Ask where waiting is allowed, and about any ticket or payment step before approaching the vessel.', 'On board, stay in the area where passengers are permitted, keep children away from water edges and vehicle lanes, and follow crew instructions as the vessel approaches the quay.']
      },
      {
        title: 'Families and access needs',
        body: ['The accessibility marker on the map refers to a step-free entrance, not to a fully verified journey. If you have a child in a pushchair or someone using a wheelchair, ask about the ramp, its gradient, gaps and steps on both banks and on the vessel itself.', 'A step-free route or an accessible toilet has not been confirmed, so arrange the return before setting out and avoid tying the day to a tight appointment.']
      }
    ],
    faq: [
      ['Do pedestrians pay a fare?', 'No current passenger tariff is documented. Undated tourism itineraries are not a tariff; check at the boarding point.'],
      ['Do pedestrians use the same gate as cars?', 'This is not confirmed, and the routes are often separated at crossing points; ask the crew before joining a queue.'],
      ['Is the crossing suitable for children?', 'That depends on barriers, assistance and crowding on the day; do not assume full suitability, and keep children away from water edges and vehicle lanes.']
    ]
  },

  'crossing-time': {
    title: 'Port Said Ferry Crossing Time and Waiting Time',
    description: 'The difference between crossing time and waiting time on the Port Said ferry, what can make the trip longer, and how to allow a margin without publishing unverified figures.',
    h1: 'How long does the Port Said ferry take? Crossing and waiting',
    card: 'Crossing and waiting time',
    lead: 'The question about duration hides two different questions: the time of the crossing itself, and the time spent queueing before it. No confirmed figure exists here for either, but it is possible to explain why both vary.',
    facts: [
      ['Crossing time:', 'Not confirmed by the operator in the available sources.'],
      ['Waiting time:', 'Not confirmed; affected by operation and queueing.'],
      ['Suggested margin:', 'Leave open time and do not attach it to a fixed appointment.']
    ],
    sections: [
      {
        title: 'Why no number is published',
        body: ['Publishing an approximate duration may look helpful, but it quickly becomes a commitment a visitor uses to plan a train or a later journey. The available sources provide no approved timetable and no departure interval, so there is no basis for a reliable figure.', 'Historical photographs and reports about berth upgrades describe something else entirely; the current crossing time cannot be inferred from either.']
      },
      {
        title: 'What makes the day longer in practice',
        body: ['Reaching the correct gate, queueing by crossing category, vessel traffic in the canal and weather all add time before boarding. At the other end there is time for landing and then finding a return option or a next destination.', 'If you only have half a day, choose one destination on the opposite bank rather than trying to fit in several sights; if your day is tied to a fixed appointment, make the crossing itself the main activity rather than a lead-in to it.'],
        bullets: ['Separate arriving at the gate, boarding and landing in your plan.', 'Confirm the return arrangement before you start waiting.', 'Do not turn a suggested visit length into a sailing timetable.']
      }
    ],
    faq: [
      ['How many minutes does the crossing take?', 'No confirmed duration exists in the available sources. Check with the operator and leave an open margin for waiting and shipping traffic.'],
      ['Is waiting long on holidays?', 'Queues may grow in high season, but no confirmed peak-time data is published here; plan on the possibility of waiting rather than an empty gate.'],
      ['Is one hour enough for a return trip?', 'That cannot be guaranteed without a confirmed timetable and departure interval. Treat the crossing as an activity needing an open margin.']
    ]
  },

  'ferry-accessibility': {
    title: 'Port Said Ferry Accessibility: Families and Disabled Visitors',
    description: 'The limits of accessibility information for the Port Said ferry: what the step-free entrance marker means, on-site questions for both banks and the vessel, and safer planning for children and older visitors.',
    h1: 'Accessibility and families on the Port Said ferry',
    card: 'Accessibility and families',
    lead: 'This page turns a general accessibility label into specific questions that can be asked on site, without claiming that the whole journey is accessible or inaccessible.',
    facts: [
      ['Map marker:', 'Refers to a step-free entrance, not a fully verified journey.'],
      ['Both banks and vessel:', 'No step-free route has been confirmed across all three sections.'],
      ['Facilities:', 'An accessible toilet or organised assistance has not been confirmed.']
    ],
    sections: [
      {
        title: 'On-site questions are more useful than a label',
        body: ['The entrance on the Port Said bank may be step-free while the quay at Port Fouad or the vessel deck differs. Ask about the three sections separately: the entrance, the ramp or gangway when boarding, and the space available during the crossing.', 'Ask for a practical description of the ramp gradient, gaps, steps and corridor width, and whether the crew provides help boarding and landing, and whether any priority order applies.'],
        bullets: ['Is the step-free entrance operating today, or has the gate moved?', 'How wide is the route and is there a gap between quay and vessel?', 'Where can a wheelchair user remain during the crossing?', 'Is assistance available when landing on the other bank?']
      },
      {
        title: 'Children and older visitors',
        body: ['For families, the practical risk is not only distance but the mixing of pedestrian and vehicle routes and the water edges. Choose a safe waiting spot, keep children close, and do not cross barriers for a better photograph.', 'For older visitors or anyone who needs a slower pace, choose a quieter time after confirming operation, plan a rest on each bank, and avoid tying the day to a tight return.']
      }
    ],
    faq: [
      ['Is the ferry fully wheelchair accessible?', 'That has not been confirmed. The map marker refers to a step-free entrance only; ask about both banks, the vessel and the ramp before relying on the route.'],
      ['Is there priority boarding for families or older visitors?', 'No confirmed rule is published here; ask the crew about the arrangement posted on the day.'],
      ['Are accessible facilities available nearby?', 'An accessible toilet or designated rest area has not been confirmed. Plan for your needs before travelling to the boarding point.']
    ]
  },

  'ferry-weather': {
    title: 'Port Said Ferry at Night and in Bad Weather',
    description: 'How fog, wind and canal traffic may affect the Port Said ferry, why night service is not assumed, and what to confirm before attempting night photography.',
    h1: 'The Port Said ferry at night and in changeable weather',
    card: 'Night and weather',
    lead: 'This guide separates possible weather effects from an operating decision this site has no authority to announce. There is no confirmation of night service here and no official weather warning.',
    facts: [
      ['Night operation:', 'Unconfirmed; do not assume service continues after sunset.'],
      ['Weather:', 'Fog, wind and spray are possible comfort and visibility factors.'],
      ['Operating decision:', 'Belongs to the operator and crew at the boarding point.']
    ],
    sections: [
      {
        title: 'Weather changes the experience, not a timetable on this page',
        body: ['Fog can reduce visibility and make photography less clear, wind can affect comfort on deck, and spray can reach a phone or camera. These are general planning notes, not a live weather state or a suspension notice.', 'This page shows no live weather, does not request your device location, and issues no warnings. For a travel decision, consult official forecasts and operator notices, then crew instructions.'],
      },
      {
        title: 'Night photography with care',
        body: ['Attractive lighting or an old night photograph does not prove the ferry runs at night, or that walkways are open for photography. Stand where the crew permits, do not cross barriers, and do not stand in a vehicle lane for a better angle.', 'If your aim is to photograph the canal crossing or passing ships, plan a daylight alternative and tie your return to a confirmed last crossing instead of assuming continuous service.'],
        bullets: ['Protect the camera from spray and wear a wind-resistant layer in cooler months.', 'Ask where standing is permitted before setting up a tripod or approaching an edge.', 'Do not treat night lighting as evidence of operation.']
      }
    ],
    faq: [
      ['Does the ferry run at night?', 'No current night operation has been confirmed. Do not assume 24-hour service from older reports or lit photographs; check the operator notice.'],
      ['Does fog stop the ferry?', 'Fog may affect visibility and comfort, but suspension is an operating decision; no official rule is published here, so ask the crew.'],
      ['Does this page show current weather?', 'No. The site shows no live weather or sailing status; use official sources and on-site instructions.']
    ]
  }
};
