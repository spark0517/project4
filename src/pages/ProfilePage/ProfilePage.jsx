

import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "semantic-ui-react";
import Loading from "../../components/Loader/Loader";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PostFeed from "../../components/PostFeed/PostFeed";
import { useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";

export default function ProfilePage() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const { username } = useParams();

    const memoizedGetProfile = useCallback(() => {
        async function getProfile() {
            try {
                const data = await userService.getProfile(username);
                setPosts(data.posts);
                setUser(data.user);
                setLoading(false);
            } catch (err) {
                setError(err.message);
            }
        }

        getProfile();
    }, [username]);

    useEffect(() => {

        memoizedGetProfile();
    }, [memoizedGetProfile]);

    if (error) {
        return <ErrorMessage error={error} />;
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <ProfileBio user={user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 750 }}>
                    <PostFeed isProfile={true} posts={posts} numPhotosCol={3} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}