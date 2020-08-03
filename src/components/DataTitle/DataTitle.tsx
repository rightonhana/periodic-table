import React, {FC} from "react";
import {css} from "emotion";
import DataTitleProps from "./DataTitleProps";

export const DataTitle: FC<DataTitleProps> = ({title = "", ...props}) => <strong className={css`
    font-weight: bold;
    user-select: none;
`}
    {...props}>{title.toUpperCase()} : </strong>

export default DataTitle;