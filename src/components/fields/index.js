import React from 'react'
import cx from 'classnames'

const getValidityClassName = meta => {
    if(meta.active) return
    if(meta.touched && meta.invalid) return 'invalid'
    if(meta.touched && meta.valid) return 'valid'
}

export const customInput = props => {
    const { label, input, type, meta } = props;
    return (
        <div
            className={cx(
                'custom-input-container',
                { 'flex-row-reverse': type === 'checkbox'},
                { dirty: meta.dirty },
                getValidityClassName(meta)
            )}
        >
            <label>{ props.label }</label>
            <input {...props.input}
                type={props.type}
            />
            {(meta.error && meta.touched && !meta.active) && (
                <div className="feedback-text error-text">{meta.error}</div>
            )}
        </div>
    )
}

export const customSelect = props => {
    return (
        <div>
            <label>{ props.label }</label>
            <select {...props.input}>
                <option />
                <option value="tabs">Tabs</option>
                <option value="spaces">Spaces</option>
            </select>
        </div>
    )
}