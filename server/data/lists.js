const listData = [
    {
        "id": 1,
        "modelName": "GPT-3",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2020,
    },
    {
        "id": 2,
        "modelName": "BERT",
        "developer": "Google",
        "primaryUseCase": "Natural Language Understanding",
        "releaseYear": 2018,
    },
    {
        "id": 3,
        "modelName": "DALL-E",
        "developer": "OpenAI",
        "primaryUseCase": "Image Generation",
        "releaseYear": 2021,
    },
    {
        "id": 4,
        "modelName": "T5",
        "developer": "Google",
        "primaryUseCase": "Text-to-Text Transfer",
        "releaseYear": 2019,
    },
    {
        "id": 5,
        "modelName": "CLIP",
        "developer": "OpenAI",
        "primaryUseCase": "Image and Text Understanding",
        "releaseYear": 2021,
    },
    {
        "id": 6,
        "modelName": "AlphaGo",
        "developer": "DeepMind",
        "primaryUseCase": "Game Playing",
        "releaseYear": 2016,
    },
    {
        "id": 7,
        "modelName": "AlphaFold",
        "developer": "DeepMind",
        "primaryUseCase": "Protein Folding",
        "releaseYear": 2020,
    },
    {
        "id": 8,
        "modelName": "YOLO",
        "developer": "Joseph Redmon",
        "primaryUseCase": "Object Detection",
        "releaseYear": 2016,
    },
    {
        "id": 9,
        "modelName": "ResNet",
        "developer": "Microsoft",
        "primaryUseCase": "Image Classification",
        "releaseYear": 2015,
    },
    {
        "id": 10,
        "modelName": "Transformer",
        "developer": "Google",
        "primaryUseCase": "Sequence Transduction",
        "releaseYear": 2017,
    },
    {
        "id": 11,
        "modelName": "VGGNet",
        "developer": "Oxford",
        "primaryUseCase": "Image Classification",
        "releaseYear": 2014,
    },
    {
        "id": 12,
        "modelName": "Inception",
        "developer": "Google",
        "primaryUseCase": "Image Classification",
        "releaseYear": 2014,
    },
    {
        "id": 13,
        "modelName": "MobileNet",
        "developer": "Google",
        "primaryUseCase": "Mobile Vision Applications",
        "releaseYear": 2017,
    },
    {
        "id": 14,
        "modelName": "EfficientNet",
        "developer": "Google",
        "primaryUseCase": "Image Classification",
        "releaseYear": 2019,
    },
    {
        "id": 15,
        "modelName": "GPT-2",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2019,
    },
    {
        "id": 16,
        "modelName": "RoBERTa",
        "developer": "Facebook",
        "primaryUseCase": "Natural Language Understanding",
        "releaseYear": 2019,
    },
    {
        "id": 17,
        "modelName": "XLNet",
        "developer": "Google",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2019,
    },
    {
        "id": 18,
        "modelName": "DistilBERT",
        "developer": "Hugging Face",
        "primaryUseCase": "Natural Language Understanding",
        "releaseYear": 2019,
    },
    {
        "id": 19,
        "modelName": "GPT-Neo",
        "developer": "EleutherAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2021,
    },
    {
        "id": 20,
        "modelName": "GPT-J",
        "developer": "EleutherAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2021,
    },
    {
        "id": 21,
        "modelName": "BERTweet",
        "developer": "VinAI Research",
        "primaryUseCase": "Social Media Text Processing",
        "releaseYear": 2020,
    },
    {
        "id": 22,
        "modelName": "Turing-NLG",
        "developer": "Microsoft",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2020,
    },
    {
        "id": 23,
        "modelName": "Megatron-LM",
        "developer": "NVIDIA",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2019,
    },
    {
        "id": 24,
        "modelName": "CTRL",
        "developer": "Salesforce",
        "primaryUseCase": "Conditional Text Generation",
        "releaseYear": 2019,
    },
    {
        "id": 25,
        "modelName": "ERNIE",
        "developer": "Baidu",
        "primaryUseCase": "Natural Language Understanding",
        "releaseYear": 2019,
    },
    {
        "id": 26,
        "modelName": "T5-11B",
        "developer": "Google",
        "primaryUseCase": "Text-to-Text Transfer",
        "releaseYear": 2019,
    },
    {
        "id": 27,
        "modelName": "GPT-3.5",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2022,
    },
    {
        "id": 28,
        "modelName": "BLOOM",
        "developer": "BigScience",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2022,
    },
    {
        "id": 29,
        "modelName": "LaMDA",
        "developer": "Google",
        "primaryUseCase": "Conversational AI",
        "releaseYear": 2021,
    },
    {
        "id": 30,
        "modelName": "MUM",
        "developer": "Google",
        "primaryUseCase": "Multitask Unified Model",
        "releaseYear": 2021,
    },
    {
        "id": 31,
        "modelName": "Codex",
        "developer": "OpenAI",
        "primaryUseCase": "Code Generation",
        "releaseYear": 2021,
    },
    {
        "id": 32,
        "modelName": "Whisper",
        "developer": "OpenAI",
        "primaryUseCase": "Speech Recognition",
        "releaseYear": 2022,
    },
    {
        "id": 33,
        "modelName": "PaLM",
        "developer": "Google",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2022,
    },
    {
        "id": 34,
        "modelName": "GShard",
        "developer": "Google",
        "primaryUseCase": "Multilingual Translation",
        "releaseYear": 2020,
    },
    {
        "id": 35,
        "modelName": "Switch Transformer",
        "developer": "Google",
        "primaryUseCase": "Efficient NLP",
        "releaseYear": 2021,
    },
    {
        "id": 36,
        "modelName": "BigGAN",
        "developer": "DeepMind",
        "primaryUseCase": "Image Generation",
        "releaseYear": 2018,
    },
    {
        "id": 37,
        "modelName": "StyleGAN",
        "developer": "NVIDIA",
        "primaryUseCase": "Image Generation",
        "releaseYear": 2018,
    },
    {
        "id": 38,
        "modelName": "WaveNet",
        "developer": "DeepMind",
        "primaryUseCase": "Speech Synthesis",
        "releaseYear": 2016,
    },
    {
        "id": 39,
        "modelName": "Tacotron",
        "developer": "Google",
        "primaryUseCase": "Speech Synthesis",
        "releaseYear": 2017,
    },
    {
        "id": 40,
        "modelName": "DeepSpeech",
        "developer": "Mozilla",
        "primaryUseCase": "Speech Recognition",
        "releaseYear": 2017,
    },
    {
        "id": 41,
        "modelName": "DeepLab",
        "developer": "Google",
        "primaryUseCase": "Image Segmentation",
        "releaseYear": 2018,
    },
    {
        "id": 42,
        "modelName": "Mask R-CNN",
        "developer": "Facebook",
        "primaryUseCase": "Image Segmentation",
        "releaseYear": 2017,
    },
    {
        "id": 43,
        "modelName": "OpenPose",
        "developer": "Carnegie Mellon University",
        "primaryUseCase": "Human Pose Estimation",
        "releaseYear": 2017,
    },
    {
        "id": 44,
        "modelName": "DeepFace",
        "developer": "Facebook",
        "primaryUseCase": "Facial Recognition",
        "releaseYear": 2014,
    },
    {
        "id": 45,
        "modelName": "FaceNet",
        "developer": "Google",
        "primaryUseCase": "Facial Recognition",
        "releaseYear": 2015,
    },
    {
        "id": 46,
        "modelName": "DeepMind Control Suite",
        "developer": "DeepMind",
        "primaryUseCase": "Reinforcement Learning",
        "releaseYear": 2018,
    },
    {
        "id": 47,
        "modelName": "MuJoCo",
        "developer": "DeepMind",
        "primaryUseCase": "Reinforcement Learning",
        "releaseYear": 2012,
    },
    {
        "id": 48,
        "modelName": "Proximal Policy Optimization",
        "developer": "OpenAI",
        "primaryUseCase": "Reinforcement Learning",
        "releaseYear": 2017,
    },
    {
        "id": 49,
        "modelName": "Soft Actor-Critic",
        "developer": "UC Berkeley",
        "primaryUseCase": "Reinforcement Learning",
        "releaseYear": 2018,
    },
    {
        "id": 50,
        "modelName": "DQN",
        "developer": "DeepMind",
        "primaryUseCase": "Reinforcement Learning",
        "releaseYear": 2015,
    },
    {
        "id": 51,
        "modelName": "A3C",
        "developer": "DeepMind",
        "primaryUseCase": "Reinforcement Learning",
        "releaseYear": 2016,
    },
    {
        "id": 52,
        "modelName": "AlphaZero",
        "developer": "DeepMind",
        "primaryUseCase": "Game Playing",
        "releaseYear": 2017,
    },
    {
        "id": 53,
        "modelName": "MuZero",
        "developer": "DeepMind",
        "primaryUseCase": "Game Playing",
        "releaseYear": 2019,
    },
    {
        "id": 54,
        "modelName": "Dreamer",
        "developer": "Google",
        "primaryUseCase": "Reinforcement Learning",
        "releaseYear": 2020,
    },
    {
        "id": 55,
        "modelName": "SimCLR",
        "developer": "Google",
        "primaryUseCase": "Self-Supervised Learning",
        "releaseYear": 2020,
    },
    {
        "id": 56,
        "modelName": "BYOL",
        "developer": "DeepMind",
        "primaryUseCase": "Self-Supervised Learning",
        "releaseYear": 2020,
    },
    {
        "id": 57,
        "modelName": "DINO",
        "developer": "Facebook",
        "primaryUseCase": "Self-Supervised Learning",
        "releaseYear": 2021,
    },
    {
        "id": 58,
        "modelName": "MAE",
        "developer": "Facebook",
        "primaryUseCase": "Self-Supervised Learning",
        "releaseYear": 2021,
    },
    {
        "id": 59,
        "modelName": "GPT-4",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2023,
    },
    {
        "id": 60,
        "modelName": "ChatGPT",
        "developer": "OpenAI",
        "primaryUseCase": "Conversational AI",
        "releaseYear": 2022,
    },
    {
        "id": 61,
        "modelName": "BERT-Base",
        "developer": "Google",
        "primaryUseCase": "Natural Language Understanding",
        "releaseYear": 2018,
    },
    {
        "id": 62,
        "modelName": "BERT-Large",
        "developer": "Google",
        "primaryUseCase": "Natural Language Understanding",
        "releaseYear": 2018,
    },
    {
        "id": 63,
        "modelName": "GPT-2 Medium",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2019,
    },
    {
        "id": 64,
        "modelName": "GPT-2 Large",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2019,
    },
    {
        "id": 65,
        "modelName": "GPT-2 XL",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2019,
    },
    {
        "id": 66,
        "modelName": "Turing-NLG 17B",
        "developer": "Microsoft",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2020,
    },
    {
        "id": 67,
        "modelName": "Turing-NLG 10B",
        "developer": "Microsoft",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2020,
    },
    {
        "id": 68,
        "modelName": "Turing-NLG 2.7B",
        "developer": "Microsoft",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2020,
    },
    {
        "id": 69,
        "modelName": "GPT-3 Ada",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2020,
    },
    {
        "id": 70,
        "modelName": "GPT-3 Babbage",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2020,
    },
    {
        "id": 71,
        "modelName": "GPT-3 Curie",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2020,
    },
    {
        "id": 72,
        "modelName": "GPT-3 Davinci",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2020,
    },
    {
        "id": 73,
        "modelName": "GPT-3.5 Turbo",
        "developer": "OpenAI",
        "primaryUseCase": "Natural Language Processing",
        "releaseYear": 2022,
    }
]

export default listData;