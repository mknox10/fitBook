import { Exercise } from '../exercise';
import { MuscleGroups } from './muscle-groups';
import { MuscleGroup } from 'src/muscle-group';

export const EXERCISES: Exercise[] = [
    {
        id: 1, 
        name: 'Bench Press', 
        description: 'The person performing the exercise lies on their back on a bench with a barbell grasped in both hands. They lower the barbell to chest level, then press the barbell upwards, extending the arms until the elbows are locked out.',
        muscleGroups: [MuscleGroups.chest, MuscleGroups.shoulders]
    },
    {
        id: 2,
        name: 'Sit Up',
        description: 'Lie on your back on the floor or a bench. Put your hands on the sides of or behind your neck. Bend your hips and waist to raise your body off the ground or bench. Lower your body back to the starting position.',
        muscleGroups: [MuscleGroups.abdomen]
    },
    {
        id: 3,
        name: 'Leg Press',
        description: 'The individual pushes a weight or resistance away from them using their legs.',
        muscleGroups: [MuscleGroups.legs]
    },
    {
        id: 4,
        name: 'Push Up',
        description: 'Kneel down with feet together on the floor. Put palms to the floor, positioning each hand about shoulder-width apart. Move legs back to flatten/straighten your body while keeping arms extended. Using arms, lower body to floor, making about a 90 degree angle at elbows. Once lowered, push back up, extending arms',
        muscleGroups: [MuscleGroups.shoulders, MuscleGroups.chest, MuscleGroups.arms]
    },
    {
        id: 5,
        name: 'Squat',
        description: 'Stand straight up, positioning feet slightly wider than shoulder-width. Keep chest and chin up, back straight, and push hips back while bending knees similiar to sitting in a chair. Ensure to keep knees steady and push back up to the starting position',
        muscleGroups: [MuscleGroups.legs]
    },
    {
        id: 6,
        name: 'Shoulder Dumbbell Press',
        description: 'Start by standing with dumbbells in each hand. Raise dumbbells above head so that triceps are parallel to the floor and elbows are bent at about 90 degrees. Extend arms upward until straight. Slowly bring arms back down until triceps are once again parallel',
        muscleGroups: [MuscleGroups.shoulders, MuscleGroups.back]
    },
    {
        id: 7,
        name: 'Plank',
        description: 'Lie face down on floor, propping body up by placing forearms to the floor. Keep body flat and hold for 30-90 seconds.',
        muscleGroups: [MuscleGroups.abdomen]
    },
    {
        id: 8,
        name: 'Lunge',
        description: 'Start by standing straight with feet together. Step forward, moving hips to the floor until knee is bent at about 90 degrees. Push off with bent leg, focusing on glutes and quads, back to the starting position',
        muscleGroups: [MuscleGroups.legs]
    },
    {
        id: 9,
        name: 'Dumbbell Curl',
        description: 'Start with dumbbells in both hands and arms stright to side of body. Keeping the upper arms to the side of the body, bend elbows to lift dumbbell up to chest. Slowly lower dumbbells back down to starting position.',
        muscleGroups: [MuscleGroups.arms]
    },
    {
        id: 10,
        name: 'Dumbbell Row',
        description: 'Start with dumbbell in each hand and bend forward, keeping back straight and arms hanging down. Pull dumbbells up, bending at the elbow, to chest focusing on back muscles. Slowly lower arms back to starting position',
        muscleGroups: [MuscleGroups.back, MuscleGroups.arms]
    },
    {
        id: 11,
        name: 'Flutter Kick',
        description: 'Lie down on back on floor and raise legs off floor. Alternate kicking with feet while keeping legs straight',
        muscleGroups: [MuscleGroups.abdomen]
    }
]