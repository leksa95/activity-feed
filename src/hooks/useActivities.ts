import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ActivityProps } from '@components/Activity';
import generateActivityLabel from '@utils/generateActivityLabel';
import { EVENT_TYPES_ENUM } from '@constants/index';

const useActivities = () => {
  const [activities, setActivities] = useState<ActivityProps[]>([]);

  const handleCreateActivity = (
    inputValue: string,
    eventType: EVENT_TYPES_ENUM,
  ) => {
    if (!inputValue) return;

    setActivities([
      ...activities,
      {
        id: uuid(),
        label: generateActivityLabel({ type: eventType }),
        description: inputValue,
        type: eventType,
        createdAt: new Date(),
      },
    ]);
  };

  const handleRemoveActivity = (id: string) => () => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  return {
    activities,
    handleCreateActivity,
    handleRemoveActivity,
  };
};

export default useActivities;
