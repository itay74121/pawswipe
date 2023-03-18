import "./MessageCard.css"

// @flow
import * as React from 'react';
type Props = {
  message:String
};
export function MessageCard(props: Props) {
  return (
    <div className="card">
      <textarea
      className="text-card"
      >{props.message}</textarea>
    </div>
  );
};