import { Workout } from '../workout';
import { EXERCISES } from './dbexercise-list';

export const WORKOUTS: Workout[] = [
    {
        id: 1,
        name: 'Monday Workout',
        date: new Date(2020, 4, 4),
        records: [
            {
                exercise: EXERCISES[0],
                targetSets: [
                    {
                        reps: 10,
                        weight: 150
                    },
                    {
                        reps: 10,
                        weight: 155
                    },
                    {
                        reps: 10,
                        weight: 160
                    }
                ],
                actualSets: []
            },
            {
                exercise: EXERCISES[1],
                targetSets: [
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    }
                ],
                actualSets: []
            },
            {
                exercise: EXERCISES[2],
                targetSets: [
                    {
                        reps: 10,
                        weight: 200
                    },
                    {
                        reps: 10,
                        weight: 200
                    },
                    {
                        reps: 10,
                        weight: 200
                    }
                ],
                actualSets: []
            }
        ]
    },
    {
        id: 2,
        name: 'Arms Workout',
        date: new Date(2020, 4, 10),
        records: [
            {
                exercise: EXERCISES[0],
                targetSets: [
                    {
                        reps: 10,
                        weight: 150
                    },
                    {
                        reps: 10,
                        weight: 155
                    },
                    {
                        reps: 10,
                        weight: 160
                    }
                ],
                actualSets: []
            },
            {
                exercise: EXERCISES[3],
                targetSets: [
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    }
                ],
                actualSets: []
            },
            {
                exercise: EXERCISES[5],
                targetSets: [
                    {
                        reps: 10,
                        weight: 40
                    },
                    {
                        reps: 10,
                        weight: 40
                    },
                    {
                        reps: 10,
                        weight: 40
                    }
                ],
                actualSets: []
            },
            {
                exercise: EXERCISES[8],
                targetSets: [
                    {
                        reps: 10,
                        weight: 40
                    },
                    {
                        reps: 10,
                        weight: 40
                    },
                    {
                        reps: 10,
                        weight: 40
                    }
                ],
                actualSets: []
            }
        ]
    },
    {
        id: 3,
        name: 'Legs Workout',
        date: new Date(2020, 4, 13),
        records: [
            {
                exercise: EXERCISES[4],
                targetSets: [
                    {
                        reps: 10,
                        weight: 220
                    },
                    {
                        reps: 10,
                        weight: 220
                    },
                    {
                        reps: 10,
                        weight: 220
                    }
                ],
                actualSets: []
            },
            {
                exercise: EXERCISES[7],
                targetSets: [
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    }
                ],
                actualSets: []
            },
            {
                exercise: EXERCISES[2],
                targetSets: [
                    {
                        reps: 10,
                        weight: 200
                    },
                    {
                        reps: 10,
                        weight: 200
                    },
                    {
                        reps: 10,
                        weight: 200
                    }
                ],
                actualSets: []
            }
        ]
    },
    {
        id: 4,
        name: 'Abs Workout',
        date: new Date(2020, 4, 20),
        records: [
            {
                exercise: EXERCISES[3],
                targetSets: [
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    }
                ],
                actualSets: []
            },
            {
                exercise: EXERCISES[1],
                targetSets: [
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    }
                ],
                actualSets: []
            },
            {
                exercise: EXERCISES[2],
                targetSets: [
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    },
                    {
                        reps: 10,
                        weight: null
                    }
                ],
                actualSets: []
            },
            {
                exercise: EXERCISES[10],
                targetSets: [
                    {
                        reps: 40,
                        weight: null
                    },
                    {
                        reps: 40,
                        weight: null
                    },
                    {
                        reps: 40,
                        weight: null
                    }
                ],
                actualSets: []
            }
        ]
    }
]