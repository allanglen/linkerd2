import PropTypes from 'prop-types';
import React from 'react';

const GrafanaLink = ({PrefixedLink, name, namespace, resource}) => {
  return (
    <PrefixedLink
      to={`/dashboard/db/linkerd-${resource}?var-namespace=${namespace}&var-${resource}=${name}`}
      deployment="grafana"
      targetBlank={true}>
      {name}&nbsp;&nbsp;<i className="fa fa-external-link" />
    </PrefixedLink>
  );
};

GrafanaLink.propTypes = {
  name: PropTypes.string.isRequired,
  namespace: PropTypes.string.isRequired,
  PrefixedLink: PropTypes.func.isRequired,
  resource: PropTypes.string.isRequired,
};

export default GrafanaLink;
