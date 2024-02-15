import { Box } from '@mui/material'
import React from 'react'

const CardInfo = ({userInfo}) => {
  return (
      <Box component="div" className="container-bio" sx={{width: '100%', maxWidth: '1024px', margin: '0 auto'}}>
        <Box 
          component="div" 
          className="header-bio"
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly'
          }}  
        >
          <Box 
            component="img" src={userInfo.avatar_url}
            sx={{
              borderRadius: '50px',
              width: '100px',
              height: '100px'
            }}
          />
          <Box 
            component="div"
            className="general-bio"
          >
            <Box component="p">{userInfo.name}</Box>
            <Box component="span">@{userInfo.login}</Box>
            <Box component="p">{userInfo.bio ? userInfo.bio : 'This profile has no bio'}</Box>
          </Box>
          <Box
            component="div"
            className="joined"
          >
            <Box component="p">{userInfo.created_at}</Box>
          </Box>
        </Box>
        <Box
          component="div"
          className="follow-repo"
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly'
          }}
        >
          <Box component="div" className="repos"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box component="span">Repos</Box>
            <Box component="span">{userInfo.public_repos}</Box>
          </Box>
          <Box component="div" className="followers"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box component="span">Followers</Box>
            <Box component="span">{userInfo.followers}</Box>
          </Box>
          <Box component="div" className="following"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box component="span">Following</Box>
            <Box component="span">{userInfo.following}</Box>
          </Box>
        </Box>
        <Box component="div" className="footer" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingBlock: '2em'}}>
          <Box
            component="div"
            className="footer-1"
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box
              component="div"
              className="footer-1-link-1"
            >
              <Box
                component="p"
              >
                {userInfo.location  ? userInfo.location : 'Not Available'}
              </Box>
            </Box>
            <Box
              component="div"
              className="footer-1-link-2"
            >
              <Box
                component="a"
                href={userInfo.blog ? userInfo.blog : '#'}
              >
                {userInfo.blog ? userInfo.blog : 'Not Available'}
              </Box>
            </Box>
          </Box>
          <Box
            component="div"
            className="footer-2"
          >
            <Box
              component="div"
              className="footer-2-link-1"
            >
              <Box
                component="p"
              >
                {userInfo.twitter_username ? twitter_username : 'Not Available'}
              </Box>
            </Box>
            <Box
              component="div"
              className="footer-2-link-2"
            >
              <Box
                component="p"
              >
                {userInfo.company ? userInfo.company : 'Not Available'}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
  )
}

export default CardInfo