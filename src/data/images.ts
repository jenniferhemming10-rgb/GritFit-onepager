// Central image mapping for site sections and service cards.

export interface StockImage {
  url: string;
  alt: string;
  credit: string;
}

export const images = {
  hero: {
    url: "/img/bpump%20real_upscaled.jpg",
    alt: "GritFit Body Pump class training together",
    credit: "GritFit Donegal",
  },
  facility: {
    url: "/img/Jenny.jpeg",
    alt: "Jenny Hemming, GritFit coach",
    credit: "GritFit Donegal",
  },
  accreditation: {
    url: "/img/repsireland.png",
    alt: "REPs Ireland registered professional accreditation",
    credit: "REPs Ireland",
  },
  classes: {
    bodyPump: {
      url: "/img/pump%20class.png",
      alt: "GritFit Pump N Burn class",
      credit: "GritFit Donegal",
    },
    athletic: {
      url: "/img/gritfit%20athletic.jpeg",
      alt: "GritFit Athletic small group training",
      credit: "GritFit Donegal",
    },
    legends: {
      url: "/img/legends.jpeg",
      alt: "GritFit Legends older adults fitness class",
      credit: "GritFit Donegal",
    },
    sports: {
      url: "/img/strength%20&%20conditioning.jpeg",
      alt: "Strength and conditioning training for sports clubs",
      credit: "GritFit Donegal",
    },
    personal: {
      url: "/img/Legend%20class%20carmel.jpeg",
      alt: "GritFit personal coaching session",
      credit: "GritFit Donegal",
    },
  },
} satisfies Record<string, StockImage | Record<string, StockImage>>;
