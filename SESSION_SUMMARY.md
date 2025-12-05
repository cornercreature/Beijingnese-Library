# Beijingnese Library - Development Session Summary

**Last Updated**: December 4, 2025

## Project Overview
A full-stack web application for documenting Beijing dialect (Beijingnese/北京话) vocabulary with:
- React frontend (port 3000)
- Node.js/Express backend (port 3001)
- PostgreSQL database
- Audio recording capability for pronunciation

## Current Project Structure

```
Beijingnese-Library/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── AudioRecorder.jsx      # Browser-based audio recording
│   │   │   └── words/
│   │   │       └── WordCard.jsx       # Word display cards with audio playback
│   │   ├── pages/
│   │   │   ├── GalleryPage.jsx        # Main gallery view
│   │   │   ├── UploadWordPage.jsx     # Word upload with character-by-character input
│   │   │   ├── WordDetailPage.jsx     # 2-page sliding word detail view
│   │   │   ├── AddExamplePage.jsx     # Add example sentences to words
│   │   │   ├── TestWordDetailPage.jsx # Test page for page 2
│   │   │   └── TestAddExamplePage.jsx # Test page for add example
│   │   ├── services/
│   │   │   ├── api.js                 # Axios configuration
│   │   │   └── wordService.js         # Word API calls
│   │   └── App.js                     # Router configuration
│   └── package.json
├── server/                 # Express backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js            # Sequelize config
│   │   │   └── upload.js              # Multer audio upload config
│   │   ├── controllers/
│   │   │   └── wordController.js      # Word CRUD operations
│   │   ├── models/
│   │   │   ├── Word.js                # Word model
│   │   │   ├── PinyinSyllable.js      # Syllable model
│   │   │   └── ExampleSentence.js     # Example model
│   │   ├── routes/
│   │   │   └── words.js               # Word API routes
│   │   └── middleware/
│   ├── uploads/audio/                 # Audio file storage
│   └── server.js                      # Express server entry
└── data/                   # CSV imports
    └── beijingnese_dictionary.csv

```

## Key Features Implemented

### 1. Word Upload System
- **Character-by-character input** for Chinese characters
- Auto-generates pinyin syllables with tone marks
- Grammar category selection
- Optional example sentence
- **Browser-based audio recording** using MediaRecorder API
- Audio saved as WebM format

### 2. Word Detail Page (2-page sliding layout)
- **Page 1**: Large character display, pinyin, definitions, grammar category, audio playback
- **Page 2**: Example sentences with "Add Another Example" button
- Sliding animation with absolute positioning and transforms
- Page indicator dots

### 3. Add Example Functionality
- Dedicated page to add examples to existing words
- Chinese sentence (required) + English translation (optional)
- Auto-redirects back to word detail after submission

### 4. Gallery View
- Grid layout of word cards
- Click word to view details
- Audio indicator (🔊) on cards with audio

## Database Schema

### Words Table
```sql
- id (primary key)
- chinese_characters
- pinyin
- english_definition
- putonghua_definition
- grammar_category (Noun, Verb, Adjective, Adverb, Phrase, Interjection, Measure Word)
- audio_file_path
- audio_file_size
- audio_mime_type
- created_at, updated_at
```

### PinyinSyllables Table
```sql
- id (primary key)
- word_id (foreign key -> words.id)
- syllable (e.g., "niàn")
- character (e.g., "念")
- tone_number (0-4, where 0 = 轻声/neutral tone)
- position (order in word)
- created_at, updated_at
```

### ExampleSentences Table
```sql
- id (primary key)
- word_id (foreign key -> words.id)
- chinese_sentence
- english_translation
- created_at, updated_at
```

## API Endpoints

### Word Endpoints
- `GET /api/words` - Get all words (with pagination, filtering)
- `GET /api/words/:id` - Get single word with syllables and examples
- `POST /api/words` - Create new word (multipart/form-data for audio)
- `POST /api/words/:id/examples` - Add example to word
- `DELETE /api/words/:id` - Delete word (CASCADE deletes syllables/examples)
- `GET /api/words/stats` - Get word statistics

## Important Code Patterns

### Audio Recording Flow
1. User clicks "Start Recording" in AudioRecorder component
2. MediaRecorder captures audio as WebM/Opus
3. On stop, blob is passed to parent via `onRecordingComplete` callback
4. Parent converts blob to File object with naming: `{word}-{timestamp}.webm`
5. Uploaded via FormData with other word fields

### FormData Handling (Backend)
```javascript
// wordController.js handles both FormData and JSON
if (req.body.syllables && typeof req.body.syllables === 'string') {
  // FormData - parse JSON strings
  syllables = JSON.parse(req.body.syllables);
} else {
  // Direct JSON
  syllables = req.body.syllables;
}
```

### Word Detail Page Sliding
```css
/* Both pages absolutely positioned */
.page { position: absolute; }
.page-one { transform: translateX(0); opacity: 1; z-index: 2; }
.page-two { transform: translateX(100%); opacity: 0; z-index: 1; }

/* Toggle state */
.show-second .page-one { transform: translateX(-100%); opacity: 0; z-index: 1; }
.show-second .page-two { transform: translateX(0); opacity: 1; z-index: 2; }
```

## Recent Issues Solved

### Issue: Page 2 not visible
- **Problem**: Flexbox sliding container wasn't working - page 2 in DOM but not visible
- **Solution**: Changed to absolute positioning with transform/opacity transitions
- **Files modified**: WordDetailPage.css

### Issue: Runtime errors about audioFile/handleAudioChange
- **Problem**: Browser cache after switching from file upload to browser recording
- **Solution**: Hard browser refresh + dev server restart

### Issue: API data nesting
- **Problem**: API returns `{ success: true, data: {...} }`, wordService extracts `response.data`
- **Solution**: In WordDetailPage: `const wordData = response.data || response;`

## Test URLs
- Gallery: `http://localhost:3000/`
- Upload Word: `http://localhost:3000/upload`
- Word Detail: `http://localhost:3000/words/109` (or any word ID)
- Add Example: `http://localhost:3000/words/109/add-example`
- **Test Page 2**: `http://localhost:3000/test-word-detail`
- **Test Add Example**: `http://localhost:3000/test-add-example`

## Running the Application

### Start Backend
```bash
cd server
npm start
# Runs on http://localhost:3001
```

### Start Frontend
```bash
cd client
npm start
# Runs on http://localhost:3000
```

## Environment Variables
```
# server/.env
DB_NAME=beijingnese_library
DB_USER=nicolesun
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432
PORT=3001
```

## Dependencies

### Frontend
- react, react-router-dom
- axios
- MediaRecorder API (browser native)

### Backend
- express
- sequelize, pg, pg-hstore
- multer (file uploads)
- cors
- dotenv

## Beijing Dialect (儿化音) Notes
- 儿 (ér) at end of words pronounced as "r" sound with tone 0 (neutral/轻声)
- Examples: 倍儿 (bèir), 哪儿 (nǎr), 玩儿 (wánr)
- In database: stored as separate character but tone_number = 0

## Known Limitations
- No authentication/authorization yet
- No word editing functionality
- No bulk import UI (CSV import done via backend scripts)
- Audio files not cleaned up when words deleted
- No search functionality

## Next Steps (From Last Session)
1. ✅ Implement word detail page with sliding 2-page layout
2. ✅ Add example upload functionality
3. **TODO**: Implement moderator delete functionality for words
4. **TODO**: Add authentication/authorization
5. **TODO**: Implement word editing
6. **TODO**: Add search/filter functionality

## Critical Files to Review When Resuming

1. **WordDetailPage.jsx** - Main word view with 2-page sliding layout
2. **AddExamplePage.jsx** - Example upload page
3. **wordController.js** - Backend word operations
4. **UploadWordPage.jsx** - Character-by-character word input
5. **AudioRecorder.jsx** - Browser recording component

## Git Status (Last Known)
- Branch: main
- Untracked: server/uploads/
- Recent commits:
  - "example page exists somewhere but i cant see it >:/"
  - "work detail page rough made"
  - "audio recording feature added to upload"

---

**To continue in new session**: Read this file, then ask about current task status.
