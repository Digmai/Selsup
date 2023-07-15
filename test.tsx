import React, { useState, useEffect } from "react";
import { Color } from "react-bootstrap/esm/types";
interface Param {
  id: number;
  name: string;
  type: "string";
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

const ParamEditor: React.FC<Props> = ({ params, model }) => {
  const getModel = (): Model => {
    return {
      paramValues: paramValues,
      colors: model.colors,
    };
  };

  const [paramValues, setParamValues] = useState<ParamValue[]>(
    model.paramValues
  );

  const handleChange = (paramId: number, value: string) => {
    const updatedParamValues = paramValues.map((paramValue) =>
      paramValue.paramId === paramId ? { paramId, value } : paramValue
    );

    setParamValues(updatedParamValues);
  };

  return (
    <div>
      {params.map((param) => (
        <div key={param.id}>
          <label>{param.name}</label>
          <input
            type="text"
            value={
              paramValues.find((paramValue) => paramValue.paramId === param.id)
                ?.value || ""
            }
            onChange={(event) => handleChange(param.id, event.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ParamEditor;
