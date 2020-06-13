import React, { useState } from 'react';

import {
    StyledWrapper,
    StyledTagsWrapper,
    StyledInput,
    StyledTagListItem,
    StyledButton,
} from 'components/InputTag/InputTag.styles';

const InputTag = ({ placeholder, getTags }) => {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const passTagsToParent = tagsArr => {
        getTags(tagsArr);
    };

    const removeTag = i => {
        const newTags = [...tags];
        newTags.splice(i, 1);
        setTags(newTags);
        passTagsToParent(newTags);
    };

    const changeInputValue = e => {
        const val = e.target.value;
        setInputValue(val);
    };

    const inputKeyDown = e => {
        const val = e.target.value;

        if (e.key === 'Enter' && val) {
            e.preventDefault();
            if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            setTags([...tags, val]);
            passTagsToParent([...tags, val]);
            setInputValue('');
        } else if (e.key === 'Backspace' && !val) {
            removeTag(tags.length - 1);
        }
    };

    return (
        <StyledWrapper>
            <StyledTagsWrapper>
                {tags.map((tag, i) => (
                    <StyledTagListItem key={tag}>
                        {tag}
                        <StyledButton
                            type="button"
                            onClick={() => {
                                removeTag(i);
                            }}
                        >
                            +
                        </StyledButton>
                    </StyledTagListItem>
                ))}
                <StyledTagListItem input>
                    <StyledInput
                        name="tags"
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={changeInputValue}
                        type="text"
                        onKeyDown={inputKeyDown}
                    />
                </StyledTagListItem>
            </StyledTagsWrapper>
        </StyledWrapper>
    );
};

export default InputTag;
