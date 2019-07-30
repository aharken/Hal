export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-home',
      badge: {
        variant: 'info',
        //text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Comfort',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Thermostat',
      url: '/theme/colors',
      icon: 'cui-sun', //Need to correct icon
      children: [
        {
          name: 'Overview',
          url: '/thermostat/overview',
        },
        {
          name: 'Zone 1',
          url: '/thermostat/zone1',
        },
        {
          name: 'Zone 2',
          url: '/thermostat/zone2',
        },
      ],
    },
    {
      name: 'Lighting',
      url: '/theme/colors',
      icon: 'cui-lightbulb', //Need to correct icon
      children: [
        {
          name: 'Overview',
          url: '/lighting/overview',
        },
        {
          name: 'Room 1',
          url: '/lighting/room1',
        },
        {
          name: 'Room 2',
          url: '/lighting/room2',
        },
      ],
    },
    {
      title: true,
      name: 'Safety',
      wrapper: {
        element: '',
        attributes: {},
      },
      class: '',
    },
    {
      name: 'CCTV System',
      url: '/theme/colors',
      icon: 'cui-screen-desktop',
      children: [
        {
          name: 'Overview',
          url: '/cctvsystem/overview',
        },
        {
          name: 'Camera 1',
          url: '/cctvsystem/camera1',
        },
        {
          name: 'Camera 2',
          url: '/cctvsystem/camera2',
        },
      ],
    },
    {
      name: 'Smart Locks',
      url: '/theme/colors',
      icon: 'cui-lock-locked',
      children: [
        {
          name: 'Overview',
          url: '/smartlocks/overview',
        },
        {
          name: 'Front Door',
          url: '/homesecurity/frontdoor',
        },
        {
          name: 'Back Door',
          url: '/homesecurity/backdoor',
        },
      ],
    },
    
  ],
};
