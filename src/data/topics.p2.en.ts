import type { TopicContent } from './topic-types';

export const EN_P2: Record<string, TopicContent> = {
  'itineraries/port-said-half-day': {
    title: 'Half a Day in Port Said: Ferry and Nearby Sights',
    description: 'A suggested half-day order starting from the Port Said bank, including the crossing and return, with stop order and a waiting margin but no unverified times or prices.',
    h1: 'Half a day in Port Said: the ferry plus one stop',
    card: 'Port Said half day',
    lead: 'This route suggests a practical order rather than a timetable: start on the west bank, cross to Port Fouad, choose one destination there, then return. It contains no sailing times or confirmed durations.',
    facts: [
      ['Starting point:', 'Port Said, west bank.'],
      ['Crossings:', 'Outbound and return, so at least two trips.'],
      ['Margin:', 'Leave open time for waiting and queueing.'],
      ['Duration:', 'Unconfirmed; do not tie the route to a fixed appointment.']
    ],
    sections: [
      {
        title: 'Order of stops',
        body: ['The first step is not a sight but confirming today operation, the operating gate on the Port Said bank, and the last return crossing. Then cross the canal and choose one east-bank option: either a short walk through Port Fouad streets or a pause on the waterfront, not both in half a day.', 'The return comes before any extra stop: head back to the boarding point early, leave a queueing margin, then add one light west-bank stop such as part of the waterfront if time remains.'],
        bullets: ['Confirm operation, the gate and the last return crossing.', 'Cross and choose one east-bank destination.', 'Return early and leave a queueing margin.', 'Add one short final stop on the Port Said bank if time remains.']
      },
      {
        title: 'Food, rest and different visitors',
        body: ['If you want a meal, keep it light and at the end of the route rather than the middle, because an unexpected wait may interrupt it. No restaurant name or price appears in this guide, and opening should be checked on the day.', 'With children, older visitors or anyone needing a step-free route, reduce the stops to one, ask about entrances and ramps on both banks and on the vessel, and do not tie the day to a later appointment.']
      }
    ],
    faq: [
      ['Do I need to cross twice?', 'Yes, if you start from Port Said and want to return there; the key step is confirming the last return crossing before you depart.'],
      ['How much time does the route need?', 'No crossing or waiting duration is confirmed, so the route is not tied to a number of hours; leave an open margin and reduce the number of stops.'],
      ['Can I add a museum to a half day?', 'It is not recommended before confirming opening status and hours; museums are independent destinations needing their own time.']
    ]
  },

  'itineraries/port-said-one-day': {
    title: 'A Full Day in Port Said and Port Fouad',
    description: 'How to divide a full day between the Port Said and Port Fouad banks: ordering the sights, rest stops and the return, while keeping unverified details qualified.',
    h1: 'A full day between Port Said and Port Fouad',
    card: 'Full day',
    lead: 'A full day does not mean a longer list of destinations, but a wider margin for waiting. This route distributes time across two banks while keeping every changeable fact in the verification box.',
    facts: [
      ['Starting point:', 'Port Said, west bank.'],
      ['Crossing:', 'Outbound then return, with possible waiting in both directions.'],
      ['Sights:', 'Independent destinations; no connected walking route is assumed.'],
      ['Duration and cost:', 'Not confirmed.']
    ],
    sections: [
      {
        title: 'Divide the day into parts, not hours',
        body: ['Spend the first part on the Port Said bank: confirm operation, then one city stop such as the waterfront, Ferial Garden or the exterior of the Suez Canal Authority Building. Do not try to include all of them before crossing.', 'In the middle part cross to Port Fouad for a short walk through its streets or a pause on the east waterfront, with a light meal. In the final part return early to Port Said and leave the rest of the day for one short stop or for rest near the return area.'],
        bullets: ['First part: verify, then one west-bank stop.', 'Middle part: cross, then a short east-bank walk.', 'Final part: early return and a rest margin.', 'Avoid destinations with unconfirmed opening hours.']
      },
      {
        title: 'What usually spoils the day',
        body: ['The usual problem is not distance but assuming the sights are adjacent, or that return times match outbound times, or that museums are open because an old guide says so. Give each destination its own route and confirm the return gate before sunset.', 'Weather, fog and canal traffic are possible causes of waiting; reserve an open margin instead of filling the day to its last minute.']
      }
    ],
    faq: [
      ['Can both museums be visited in one day?', 'In principle yes after confirming opening status and hours for each, but this page confirms neither; a separate day is better if possible.'],
      ['Do I need transport between sights?', 'You may, because the sights are independent destinations on two banks; check the route on a map and do not assume a connected path.'],
      ['When should I start back?', 'Before the margin gets tight: ask about the last return crossing at the start of the day, then return early and leave queueing time.']
    ]
  },

  'itineraries/port-fouad-half-day': {
    title: 'Half a Day in Port Fouad: An East-Bank Walk',
    description: 'A suggested half-day route on the Port Fouad bank after the ferry: heritage streets, the waterfront, a short rest, and the return arrangement.',
    h1: 'Half a day in Port Fouad',
    card: 'Port Fouad half day',
    lead: 'This route is for the east bank alone. It assumes you have crossed from Port Said and puts confirmation of the return gate first.',
    facts: [
      ['Starting point:', 'After landing in Port Fouad, east bank.'],
      ['Return:', 'A separate trip back to Port Said, to be confirmed first.'],
      ['Duration:', 'Unconfirmed; no distances or walking times are published here.']
    ],
    sections: [
      {
        title: 'Order of the walk',
        body: ['Start by identifying the return gate and asking about the last crossing, then choose one direction for a short walk through the streets with Port Fouad distinctive character, or a pause on the waterfront. Do not try to cover several districts in half a day.', 'End with a short rest near the return route, then head back to the boarding point with an open queueing margin. Distance to the quay matters more than the number of photographs.'],
        bullets: ['Confirm the return gate and last crossing before moving away.', 'Choose one direction for the walk.', 'Keep the rest close to the return route.', 'Respect private property and avoid close photos of house entrances.']
      },
      {
        title: 'Who the route suits',
        body: ['It suits visitors interested in the character of the city more than in collecting sights. With children or older visitors, reduce walking, look for permitted seating and do not assume benches or facilities on every stretch.', 'In thick fog or strong wind, shorten the walk and stay near the waterfront area closest to the return point.']
      }
    ],
    faq: [
      ['Do I need another crossing during the walk?', 'No, the walk stays on the east bank; the extra crossing is the return trip to Port Said.'],
      ['Is the whole route walkable on foot?', 'It may be, but no confirmed distances are published here; pace yourself and do not assume a connected path.'],
      ['What if I cannot find the usual gate?', 'Look for posted guidance or ask the crew about a temporary berth change; do not assume any nearby quay is the boarding point.']
    ]
  },

  'itineraries/ferry-photo-route': {
    title: 'Ferry and Suez Canal Photo Route: Safe Angles',
    description: 'How to plan a photography session for the ferry and canal traffic from permitted positions on both banks, with light, weather and safety notes but no ship timetable.',
    h1: 'Photo route: the ferry and the Suez Canal',
    card: 'Photo route',
    lead: 'This is a route for camera angles, not a ship schedule. The page does not track navigation, promises no particular shot, and puts safety before the angle.',
    facts: [
      ['Positions:', 'Permitted public areas on both banks and the passenger area on board.'],
      ['Ship times:', 'Not available here; there is no live navigation data.'],
      ['Light:', 'Morning or before sunset are planning options, not a guarantee of evening operation.']
    ],
    sections: [
      {
        title: 'Order of angles',
        body: ['Start on the Port Said bank with a wide angle of the waterfront and crossing area, then take skyline and water shots during the trip from the permitted passenger area, and finally from the Port Fouad bank shoot back towards Port Said. That gives three different angles without a third crossing.', 'Do not cross barriers or stand in vehicle lanes, and ask the crew where you may stand before setting up any support or approaching an edge.'],
        bullets: ['First angle west, before boarding.', 'Second angle from the passenger area during the crossing.', 'Third angle east, looking back to Port Said.', 'Return before the last-crossing margin gets tight.']
      },
      {
        title: 'Weather and equipment',
        body: ['Fog reduces clarity, while wind and spray call for camera and phone protection; a light wind-resistant layer is enough in cooler months. No live weather state is shown here; check official forecasts before leaving.', 'Attractive light or an old night photograph does not prove the ferry runs at night; keep the session in daylight and tie its end to a confirmed last return crossing.']
      }
    ],
    faq: [
      ['Are there confirmed ship passing times?', 'No. This page does not track navigation; consult official Suez Canal Authority sources if you need operational data.'],
      ['Is photography allowed on board?', 'In areas where passengers may stand and with crew permission; ask before shooting and do not approach edges.'],
      ['What is the best time for photography?', 'Morning or before sunset in terms of light, but evening operation is not assumed; confirm the last return crossing first.']
    ]
  },

  'itineraries/family-trip': {
    title: 'A Family Visit to the Port Said Ferry: A Safe Route',
    description: 'How to plan a family day around the ferry: fewer stops, child safety, older visitors and accessibility, with an open time margin.',
    h1: 'A family day around the Port Said ferry',
    card: 'Family route',
    lead: 'A successful family day comes from fewer stops and a waiting margin, not a crowded programme. This route gathers children, older visitors and accessibility considerations into one order.',
    facts: [
      ['Number of stops:', 'One or two at most.'],
      ['Accessibility:', 'The step-free entrance marker does not prove a fully accessible journey.'],
      ['Margin:', 'Leave open time for waiting and rest.']
    ],
    sections: [
      {
        title: 'A comfortable order',
        body: ['Start by confirming operation, the gate and the last return crossing, then choose one nearby stop on the Port Said bank before or after the crossing, such as a short stretch of the waterfront or Ferial Garden after confirming it is open. Avoid adding a museum to a short family day before checking its hours.', 'While waiting, choose a spot away from vehicle lanes and water edges, carry water on hot days, and do not tie the day to a later appointment.'],
        bullets: ['Confirm operation and the return before leaving.', 'One or two stops only.', 'A rest and water in the middle of the day.', 'Avoid a destination with unconfirmed opening hours.']
      },
      {
        title: 'Children, older visitors and accessibility',
        body: ['Keep children close, do not cross barriers for a photograph, and do not allow standing in vehicle lanes. For older visitors choose a slower pace and permitted seating, and do not let the last return crossing be the only gap between rest and returning.', 'If someone uses a wheelchair or a pushchair, ask about the entrance, ramp gradient, gaps and steps on both banks and on the vessel; a step-free route has not been confirmed.'],
        bullets: ['Ask about the ramp and gaps across all three sections.', 'Plan a rest on each bank.', 'Do not assume an accessible toilet or organised assistance.']
      }
    ],
    faq: [
      ['Is the ferry suitable for children?', 'It can be, but that depends on barriers, crowding and assistance on the day; do not assume full suitability.'],
      ['Is the trip fully wheelchair accessible?', 'That has not been confirmed; the map marker refers to a step-free entrance only, so ask about both banks and the vessel.'],
      ['How many stops are enough for a family?', 'One or two with an open waiting margin is better than a crowded programme.']
    ]
  },

  'itineraries/cruise-day-trip': {
    title: 'Cruise Visitors to Port Said: Limits of a Short Visit',
    description: 'What a visitor arriving by cruise ship should know before planning a ferry crossing: berth location, port procedures, allowed time ashore, and the limits of what can be promised.',
    h1: 'Cruise visitors: is a short ferry visit realistic?',
    card: 'Cruise day visitors',
    lead: 'This page does not promise an executable shore excursion. It explains why a normal city route may not suit a visitor arriving by cruise ship, and what must be confirmed first.',
    facts: [
      ['Berth location:', 'Set by the ship programme and port guidance; no specific quay is published here.'],
      ['Going ashore and returning:', 'Controlled by port procedures and the ships allowed time.'],
      ['Operation:', 'Ferry times and the last return crossing are not confirmed here.'],
      ['Programme:', 'A normal city route does not automatically translate into a shore excursion.']
    ],
    sections: [
      {
        title: 'Three constraints come before any plan',
        body: ['The first is the time allowed ashore and the return deadline to the ship, a commitment that an uncertain wait at the ferry cannot compensate for. The second is the actual berth location and the procedures for leaving the port area; reaching the city centre may not be direct.', 'The third is the absence of a confirmed ferry timetable: even a short-looking programme of an outbound and return crossing may take an unpredictable amount of time. A ferry visit should therefore not be tied to the ships boarding deadline without a wide margin.'],
        bullets: ['Confirm the time ashore and the latest return to the ship.', 'Ask about the berth location and port exit procedures.', 'Do not start a crossing if the margin is tight.', 'Use the official ship excursion organiser if you need a time commitment.']
      },
      {
        title: 'What to do instead',
        body: ['When time is short, prioritise one stop near the disembarkation area after confirming it is reachable, and avoid any extra crossing. If the aim is to see the canal, a safe pause on the public waterfront may be enough instead of boarding the ferry.', 'This page offers no shore-excursion order, names no organiser, shop or restaurant, and publishes no prices or times. All operating information remains with the port, the ship and the operator.'],
        bullets: ['One nearby stop is better than two crossings.', 'Do not assume a taxi or a walking route is immediately available.', 'Keep enough time to return before the ships deadline.']
      }
    ],
    faq: [
      ['Can I visit the ferry between disembarking and reboarding?', 'It may be possible, but it depends on time ashore, ferry operation and the last return crossing, none of which is confirmed here; the page makes no promise.'],
      ['Where exactly does the ship dock?', 'The ship programme and port guidance determine that; this page publishes no specific berth location.'],
      ['Are ready-made shore excursions available?', 'They may be offered through the ships official excursion organiser; this is an independent guide and does not sell or recommend a particular programme.']
    ]
  }
};
