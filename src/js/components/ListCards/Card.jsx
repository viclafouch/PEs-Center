import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

function truncateAndReplace(str = '', maxLength = 130) {
  let text = str.replace(/&nbsp;/gi, ' ')
  if (text.length > maxLength) text = `${text.slice(0, maxLength)}...`
  return text
}

const StyledListItem = styled(ListItem)`
  &&:hover {
    opacity: 0.875;
    cursor: pointer;
  }
`

const StyledAvatar = styled(Avatar)`
  && {
    border: 1px solid rgba(255, 255, 255, 0.75);
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    img {
      width: 20px;
      height: auto;
    }
  }
`

const Description = styled(Typography)`
  && {
    display: -webkit-box;
    font-size: 11px;
    margin-top: 3px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`
const Title = styled(Typography)`
  && {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    line-height: 1.1em;
  }
`

function CardItem({ title, description, url, onSelect }) {
  const onClick = e => {
    e.preventDefault()
    return onSelect({ title, description, url })
  }

  return (
    <StyledListItem alignItems="flex-start" button onClick={onClick}>
      <ListItemAvatar>
        <StyledAvatar alt={title} sizes="24" src="/images/youtube-64.png" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Title gutterBottom variant="subtitle1">
            {title}
          </Title>
        }
        secondary={
          <Description component="span" color="textPrimary">
            {truncateAndReplace(description)}
          </Description>
        }
      />
    </StyledListItem>
  )
}

export default CardItem