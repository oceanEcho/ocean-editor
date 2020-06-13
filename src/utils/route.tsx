import React from 'react';

export const withParamsId = (WrappedComponent: any) => (props: any) => {
  return <WrappedComponent id={props.match.params.id} />;
};
