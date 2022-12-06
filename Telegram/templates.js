module.exports = {
    container_start: e =>
        `Started: <b>${e.Actor.Attributes.name}</b> \nImage: <b>(${e.Actor.Attributes.image})</b> \nServer: <b>DevAP-01</b> \nLink: <b>https://dev-portainer1.mpwt.gov.kh/#!/2/docker/containers/${e.Actor.ID.substr(0, 12)}</b>`,

    container_die: e =>
        `Stopped: <b>${e.Actor.Attributes.name}</b> \nImage: <b>(${e.Actor.Attributes.image})</b> \nServer: <b>DevAP-01</b> \nLink: <b>https://dev-portainer1.mpwt.gov.kh/#!/2/docker/containers/${e.Actor.ID.substr(0, 12)}</b>`,

    'container_health_status: healthy': e =>
        `Status: <b>Healthy</b> for <b>${e.Actor.Attributes.name} (${e.Actor.Attributes.image}) </b>`,

    'container_health_status: unhealthy': e =>
        `Status: <b>Unhealthy</b> for <b>${e.Actor.Attributes.name} (${e.Actor.Attributes.image}) </b>`,
};