import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./activityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./activityFilters";

export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => { // Called when our website loads
        if(activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters/>
            </Grid.Column>
        </Grid>
    )
})