export const homePageQuery = `*[_type == "homePage"][0]{
  title,
  seo,
  hero,
  overview{
    ...,
    staffImage{
      ...,
      asset->
    },
    warehouseImage{
      ...,
      asset->
    }
  },
  servicesSection,
  audiencesSection{
    ...,
    image{
      ...,
      asset->
    }
  },
  cta
}`;


export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  title,
  hero,
  problemSolution,
  differentiatorsSection,
  foundingStory,
  leadership{
    ...,
    headshot{
      ...,
      "url": asset->url,
      asset->
    }
  },
  stats,
  valuesSection,
  cta
}`;


export const servicesPageQuery = `*[_type == "servicesPage"][0]{
  title,
  hero{
    ...,
    image{
      ...,
      "url": asset->url,
      asset->
    }
  },
  servicesSection{
    ...,
    items[]{
      ...,
      image{
        ...,
        "url": asset->url,
        asset->
      }
    }
  },
  coverage{
    ...,
    image{
      ...,
      "url": asset->url,
      asset->
    }
  }
}`;


export const whoWeServePageQuery = `*[_type == "whoWeServePage"][0]{
  title,
  hero{
    ...,
    image{
      ...,
      "url": asset->url,
      asset->
    }
  },
  industriesSection,
  reliability,
  communityImpact{
    ...,
    image{
      ...,
      "url": asset->url,
      asset->
    }
  },
  cta
}`;


export const contactSettingsQuery = `*[_type == "contactSettings"][0]{
  title,
  formSection,
  deliveryOptions,
  successMessage,
  mapSection,
  supportCard,
  stats
}`;

export const careersPageQuery = `*[_type == "careersPage"][0]{
  title,
  hero,
  benefits,
  openRolesSection,
  qualificationsSection,
  applicationSection
}`;


export const compliancePageQuery = `*[_type == "compliancePage"][0]{
  title,
  hero{
    ...,
    image{
      ...,
      "url": asset->url,
      asset->
    }
  },
  pillarsSection,
  trainingSection,
  secureOperations,
  cta
}`;


export const legalPageQuery = `*[_type == "legalPage" && slug.current == $slug][0]{
  title,
  kicker,
  effectiveDate,
  lastUpdated,
  body
}`;